import { useState } from "react";
import toast from "react-hot-toast";
import {
  getChannels as getChannelsRequest,
  getFollowedChannels,
} from "../../services/api";

export const useChannels = () => {
  const [channels, setChannels] = useState(null);

  const getChannels = async (isLogged = false) => {
    const channelsData = await getChannelsRequest();
    if (channelsData.error) {
      return toast.error(
        channelsData.e.response?.data?.message ||
          "Error al traerte los canales boludín."
      );
    }

    if (!isLogged) {
      return setChannels({
        channels: channelsData.data.channels,
      });
    }

    const followedChannels = await getFollowedChannels();

    if (followedChannels.error) {
      return toast.error(
        followedChannels.e?.response?.data ||
          "Error al traerte los canales que seguís manin."
      );
    }

    // Modificar el estado de los channels
    setChannels({
      channels: channelsData.data.channels,
      followedChannels: channelsData.data.channels.filter((channel) =>
        followedChannels.data.followedChannels.includes(channel.id)
      ),
    });
  };

  return {
    getChannels,
    isFetching: !Boolean(channels),
    allChannels: channels?.channels,
    followedChannels: channels?.followedChannels,
  };
};

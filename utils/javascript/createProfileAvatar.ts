const createProfileAvatar = (name: string) => {
  const profilePicUrl = `https://ui-avatars.com/api/?background=random&name=${name}&size=128&bold=true`;

  return profilePicUrl;
};

export default createProfileAvatar;

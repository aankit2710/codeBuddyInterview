// level {1/2/3}

const getUsers = async () => {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());

    let user = doc[0];
    let Profile = doc[1];
    let p = doc[2];

    const userProfile = {
        user,
        profile: Profile,
        posts: p
    };

    return userProfile;
}
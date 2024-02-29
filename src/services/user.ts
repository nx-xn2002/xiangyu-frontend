import myAxios from "../plugins/myAxios.js";

export const getCurrentUser = async () => {
    // const currentUser = getCurrentUserState();
    // if (!currentUser) {
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        // setCurrentUserState(res.data);
        return res.data;
    }
    return null;
    // }
    // return currentUser;
}
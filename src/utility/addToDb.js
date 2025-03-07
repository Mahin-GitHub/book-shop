const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedList = JSON.parse(storedWishListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, "already exists in the read list");
    }

    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

export {addToStoredReadList, getStoredReadList, getStoredWishList}
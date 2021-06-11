const permissionList = ["user", "professional", "admin"]

function checkPermission(userPermIdx, minPermissionLevel, maxPermissionLevel=-1){
    let maxIdx = permissionList.length;
    if(maxPermissionLevel > -1) { maxIdx = maxPermissionLevel; }

    const approvedRange = permissionList.slice(minPermissionLevel, maxIdx);

    if(approvedRange.includes(permissionList[userPermIdx])) return true;
    else return false;
}

module.exports = {permissionList, checkPermission}
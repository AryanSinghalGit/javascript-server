import { permissions } from './constant';
export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
    console.log('hasPermission', moduleName, role, permissionType);
    if (permissions[moduleName] === undefined)
        return false;
    const data = permissions[moduleName];
    let tmp: boolean = false;
    if (data[permissionType] === undefined)
        return false;

    data[permissionType].forEach(element => {
        if (element === role) {
            tmp = true;
        }

    });
    return tmp;
}
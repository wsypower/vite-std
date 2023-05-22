/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-05-22 21:21:36
 * @LastEditTime: 2023-05-22 21:44:28
 * @LastEditors: wsy
 */
export default function stdVirtual() {
  const virtualModuleId = 'virtual:my-module'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'virtual-plugin', // 必须的，将会在 warning 和 error 中显示
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return 'export const msg = "from virtual module"'
      }
    },
  }
}

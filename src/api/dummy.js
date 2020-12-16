import { api } from '@/config'
import { getDataViaApi } from '@/utils/httpApi'

const callGetDummy = (callBack, errorHandler) => {
  getDataViaApi(api.dummy.get, callBack, errorHandler)
}

export {
  callGetDummy
}

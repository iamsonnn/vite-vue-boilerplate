import { StateType } from "@/stores/stateType.js"

const join = (stateType, mutation) => {
    return stateType + "/" + mutation
}

export const RegisterMutation = {
  LOADER: {
    SHOW: "SHOW",
    HIDE: "HIDE",
  },
}


export const CommitMutation = {
  LOADER_SHOW: join(StateType.LOADER, RegisterMutation.LOADER.SHOW),
  LOADER_HIDE: join(StateType.LOADER, RegisterMutation.LOADER.HIDE),
}

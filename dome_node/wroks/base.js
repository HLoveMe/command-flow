const { Base64DecodeWork, Base64EnCodeWork, Context, WorkStatus } = require("command-flow")

const logInfo = new Map();
const getContext = () => {
  const context = new Context()
  context.addWorkLog({
    next: (log) => {
      const {
        desc,
        value: { _value },
        work,
        error,
      } = log
      const id = _value.id
      const channeLValue = _value.value._value
      const workName = work.map(($1) => $1.name).join('-')
      const currentRun = logInfo.value.get(id) || []
      logInfo.value.set(id, currentRun)
      currentRun.push({
        id,
        workName,
        desc,
        value: channeLValue,
        error,
      })
    },
    error: () => {
      context.stopWorkChain()
    },
  })
  return context
}


export {

}
import ConnectForm from './ConnectForm'

function Select({name}:{name:string}) {
  return (
    <>
    <ConnectForm >
        {({register})=><>
        <select {...register(name,{required:true})} >
            <option value="">Select Status..</option>
            <option value="A">A</option>
            <option value="I">I</option>
        </select>
        </>}
        </ConnectForm></>
  )
}

export default Select
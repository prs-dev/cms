import { FLEXCENTER } from "../styles/styles"

const isAdmin = false
const Dashboard = () => {
  return (
    <>
      {isAdmin ?
        <div>
          {/* admin dashboard */}
        </div> :
        <div style={{
          height: "100%"
        }}>
          {/* user dashboard */}
          {/* submit feedback */}
          <form style={{
            ...FLEXCENTER,
            flexDirection: "column",
            height: "100%",
            gap: "10px"
          }}>
            <div style={{...FLEXCENTER, flexDirection: 'column', gap: "10px"}}>
              <label>Title</label>
              <input type="text" name="" />
            </div>
            <div style={{...FLEXCENTER, flexDirection: 'column', gap: "10px"}}>
              <label>Description</label>
              <textarea rows={10} cols={30} name=""></textarea>
            </div>
            <div style={{...FLEXCENTER, flexDirection: 'column', gap: "10px"}}>
              <label>Category</label>
              <select>
                <option value="">Service</option>
                <option value="">Billing</option>
                <option value="">Staff</option>
                <option value="">Other</option>
              </select>
            </div>
            <div style={{...FLEXCENTER, flexDirection: 'column', gap: "10px"}}>
              <label>Attachment</label>
              <input type="file" name="" />
            </div>
          </form>
          {/* feedback list */}
          <div>
            {/* ideally a table should be used, but can be a simple map too */}
            
          </div>
        </div>}
    </>
  )
}

export default Dashboard
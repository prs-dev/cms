import { FLEXCENTER } from "../styles/styles"

const isAdmin = false

const dummyComplaints = [
  {
    title: "test",
    description: "testing test",
    category: "Other",
    attachment: "./moshi.jpg"
  },
  {
    title: "test",
    description: "testing test",
    category: "Other",
    attachment: "./moshi.jpg"
  },
  {
    title: "test",
    description: "testing test",
    category: "Other",
    attachment: "./moshi.jpg"
  },
  {
    title: "test",
    description: "testing test",
    category: "Other",
    attachment: "./moshi.jpg"
  },
  {
    title: "test",
    description: "testing test",
    category: "Other",
    attachment: "./moshi.jpg"
  },
]

const Dashboard = () => {
  return (
    <>
      {isAdmin ?
        <div>
          {/* admin dashboard */}
        </div> :
        <div style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly"
        }}>
          {/* user dashboard */}
          {/* submit feedback */}
          <form style={{
            ...FLEXCENTER,
            flexDirection: "column",
            height: "100%",
            gap: "10px",
            flex: 1
          }}>
            <div style={{ ...FLEXCENTER, flexDirection: 'column', gap: "10px" }}>
              <label>Title</label>
              <input type="text" name="" />
            </div>
            <div style={{ ...FLEXCENTER, flexDirection: 'column', gap: "10px" }}>
              <label>Description</label>
              <textarea rows={10} cols={30} name=""></textarea>
            </div>
            <div style={{ ...FLEXCENTER, flexDirection: 'column', gap: "10px" }}>
              <label>Category</label>
              <select>
                <option value="">Service</option>
                <option value="">Billing</option>
                <option value="">Staff</option>
                <option value="">Other</option>
              </select>
            </div>
            <div style={{ ...FLEXCENTER, flexDirection: 'column', gap: "10px" }}>
              <label htmlFor="fileInput" style={{ border: "1px solid #333", padding: "10px" }}>Attachment</label>
              <input type="file" id="fileInput" name="fileInput" style={{ visibility: "hidden" }} />
            </div>
          </form>
          {/* feedback list */}
          <div style={{
            display: 'flex',
            flexWrap: "wrap",
            flex:1,
            height: "100%",
            gap: "10px",
            padding: "20px"
          }}>
            {/* ideally a table should be used, but can be a simple map too */}
            {dummyComplaints.map(complaints => (
              <div style={{
                padding: "10px",
                border: "1px solid #333",
                borderRadius: '10px'
              }}>
                <div>
                    <img src={complaints.attachment} alt="" srcset="" />
                </div>
                <div>
                  <h1>{complaints.title}</h1>
                </div>
                <div>
                    <p>{complaints.description}</p>
                </div>
                <div>
                    <h3>{complaints.category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>}
    </>
  )
}

export default Dashboard
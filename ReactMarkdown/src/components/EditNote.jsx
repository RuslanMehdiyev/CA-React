
function EditNote({setText,text}) {
  return (
    <div className="textarea">
        <textarea name="text" value={text} onChange={(e)=>setText(e.target.value)} ></textarea>
    </div>
  )
}

export default EditNote
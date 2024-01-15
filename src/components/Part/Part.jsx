const { default: PartDesktop } = require("./PartDesktop")
const { default: PartMobile } = require("./PartMobile")

const Part = () => 
{
  return(
    <div>
      <PartMobile/>
      <PartDesktop/>
    </div>
  )
}

export default Part;
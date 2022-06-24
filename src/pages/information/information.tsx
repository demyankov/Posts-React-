import { useState } from "react";
import { H2 } from "../../components/title/tittleStyles";
import { InformationType } from "../../data/dataType";
import { TabBar, Text, Wrapper} from "./informationSlyles";
import Tab from "./tab/tab";

function Information({informationData}: {informationData:InformationType}): JSX.Element {
    const [activeTab, setActive] = useState(0)     
    
    return (
      <Wrapper>
        <H2>Information</H2>
        <TabBar>           
                <li><Tab label ="0" activeTab={activeTab} click={()=>{setActive(0)}}>Tab1</Tab></li>
                <li><Tab label ="1" activeTab={activeTab} click={()=>{setActive(1)}}>Tab2</Tab></li>
                <li><Tab label ="2" activeTab={activeTab} click={()=>{setActive(2)}}>Tab3</Tab></li>            
        </TabBar>
        {/* сделал загрузку из массива, можно через children,если так будет лучше */}
        <Text>{informationData[activeTab].text}</Text>        
      </Wrapper>
    );
  }

  export default Information
import {ActiveTab, DisActiveTab} from "./tabStyles";
import { TabType } from "./tabType";


function Tab({ children, label, activeTab, click, ...otherProps }: TabType) { 
  return (    
    Number(label) === activeTab
      ?<ActiveTab onClick={click}>{children}</ActiveTab>
      :<DisActiveTab onClick={click}>{children}</DisActiveTab>    
   );
}

export default Tab;
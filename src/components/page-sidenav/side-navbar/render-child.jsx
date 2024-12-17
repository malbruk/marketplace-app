import { Span } from "components/Typography";
import { Circle, StyledList } from "./styles";
export const renderChild = (childList, handleSelect) => {
  return childList.map(item => <StyledList key={item.name} onClick={() => handleSelect(item.name)} sx={{
    color: "grey.700",
    cursor: "pointer"
  }}>
      <Circle className="listCircle" />
      <Span py={0.75} flex="1 1 0">
        {item.name}
      </Span>
    </StyledList>);
};
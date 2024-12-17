"use client";

import { memo } from "react";
import Box from "@mui/material/Box"; // CUSTOM ICON COMPONENTS

import appIcons from "icons"; // GLOBAL CUSTOM COMPONENTS

import Scrollbar from "components/Scrollbar";
import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box"; // LOCAL CUSTOM COMPONENTS

import Accordion from "./nav-accordion";
import CategoryTitle from "./category-title"; // STYLED COMPONENTS

import { NavbarRoot } from "./styles"; // CUSTOM DATA MODEL

// ==================================================================
const SideNavbar = (props) => {
  const {
    isFixed,
    navList,
    lineStyle = "solid",
    sidebarHeight = "auto",
    sidebarStyle = "style1",
    handleSelect = () => {},
  } = props;
  console.log('navList', navList)
  return (
    <Scrollbar
      autoHide={false}
      sx={{
        maxHeight: sidebarHeight,
      }}
    >
      <NavbarRoot fixed={isFixed} sidebar={sidebarStyle}>
        {navList.map((item, ind) => {
          const Icon = appIcons[item.icon] || appIcons["Home"];
          
          return (
            <div key={ind}>
              <CategoryTitle title={item.name} line={lineStyle} />
              {/* {item.categoryItem.map((item, ind) => { */}
              <Box mb="2px" color="grey.700" key={ind}>
                {item.children ? (
                  <Accordion
                    Icon={Icon}
                    child={item.children}
                    title={item.name}
                    handleSelect={handleSelect}
                  />
                ) : (
                  <Box
                    key={item.name}
                    onClick={() => handleSelect(item.name)}
                    sx={{
                      color: "grey.700",
                      cursor: "pointer",
                    }}
                  >
                    <FlexBox gap={1.5} className="linkList" py={0.75}>
                      <Icon fontSize="small" />
                      <Span fontWeight="600">{item.name}</Span>
                    </FlexBox>
                  </Box>
                )}
              </Box>
              ;{/* })} */}
            </div>
          );
        })}
      </NavbarRoot>
    </Scrollbar>
  );
};

export default memo(SideNavbar);

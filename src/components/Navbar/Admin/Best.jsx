import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Best = () => {
  const [items, setItems] = useState([]);
  const [sim, setSim] = useState();
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/airecommend",
      headers: {},
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        // console.log((response.data.names));
        //   names_of_prod= response.data.names
        setItems(response.data.names);
        mbaanalysis();
        //   console.log(items)
        // const quantity_of_prods=response.data.prods
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  }, []);

  const mbaanalysis = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/patterns",
      headers: {},
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(response.data);
        
        setSim(response.data);
        
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  };
  return (
   
    <>
      {sim ? (
        <>
          {items.map((name) => {
            let h = [];
            for (let i = 0; i < sim.length; i++) {
              // console.log(sim[i].antecedents)
              if (sim[i].antecedents == name && sim[i].support > 0.011) {
                h.push(sim[i]);
                console.log(h, sim[i].antecedents);
              }
            }
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {name}
                </AccordionSummary>
                <AccordionDetails>
                  {h.map((i) => {
                    return (
                      <>
                        {i.consequents} ( {i.lift} ),
                      </>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Best;

"use client";
import CurrencyConvertor from "@/components/CurrencyConvertor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest`)
    .then(res => res.json())
    .then(data => {
    console.log("CHeck Data :: ",data)
    });

  },[])
  return (
    <main className="main-wrapper">
      <div className="button-wrapper">
        <Card 
        style=
        {{
          width:"400px",
          textAlign:"center",
          height:"400px"
        }}
        
        >
          <CardHeader>
            <CardTitle>Currency Convertor</CardTitle>
          </CardHeader>
          <CardContent className="content">
            <CurrencyConvertor />
            <div className="equels">=</div>
            <CurrencyConvertor />
          </CardContent>
          
        </Card>

        {/* <Button>Click Here</Button> */}
      </div>
    </main>
  );
}

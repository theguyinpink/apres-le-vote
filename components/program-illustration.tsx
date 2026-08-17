import Image from "next/image";
import type { IllustrationKey } from "../lib/party-programs";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 2,
};

export function ProgramIllustration({ kind, src }: { kind: IllustrationKey; src?: string }) {
  if (src) {
    return (
      <div className="program-illustration" aria-hidden="true">
        <Image alt="" height={160} src={src} unoptimized width={160} />
      </div>
    );
  }

  const art = (() => {
    switch (kind) {
      case "democracy":
        return <><path d="M34 47h92v55H34zM43 47l37-24 37 24M55 61v28m25-28v28m25-28v28M29 102h102" {...strokeProps}/><path d="m108 24 17 8-17 8z" className="illustration-fill"/><path d="M108 24v23" {...strokeProps}/></>;
      case "commons":
        return <><path d="M80 20c-4 15-22 27-22 48a22 22 0 0 0 44 0c0-21-18-33-22-48z" {...strokeProps}/><path d="M28 92c18-10 31-10 48 0s31 10 56 0M33 105c18-10 31-10 47 0s30 10 47 0" {...strokeProps}/><circle cx="80" cy="68" r="8" className="illustration-fill"/></>;
      case "work":
        return <><rect x="29" y="38" width="102" height="65" rx="3" {...strokeProps}/><path d="M57 38V27h46v11M29 60h102M67 60v12h26V60" {...strokeProps}/><path d="M45 87h31" {...strokeProps}/><circle cx="109" cy="87" r="10" className="illustration-fill"/></>;
      case "rights":
        return <><path d="M80 19v83M46 34h68M53 34 34 68h38L53 34zm54 0L88 68h38l-19-34zM59 105h42" {...strokeProps}/><circle cx="80" cy="25" r="8" className="illustration-fill"/></>;
      case "education":
        return <><path d="M26 37c20-7 37-3 54 9v64c-17-12-34-16-54-9V37zm108 0c-20-7-37-3-54 9v64c17-12 34-16 54-9V37z" {...strokeProps}/><path d="M80 46v64M39 51c10-2 19 0 28 4m-28 12c10-2 19 0 28 4m54-20c-10-2-19 0-28 4m28 12c-10-2-19 0-28 4" {...strokeProps}/><path d="m80 20 12 9-12 9-12-9z" className="illustration-fill"/></>;
      case "finance":
        return <><circle cx="57" cy="75" r="28" {...strokeProps}/><circle cx="98" cy="54" r="28" {...strokeProps}/><path d="M92 43h15m-17 8h14m-6-15v35M44 77h26M57 64v26" {...strokeProps}/><path d="M108 86h25v23h-25z" className="illustration-fill"/></>;
      case "solidarity":
        return <><path d="M29 67c17-17 31-13 51 7 20-20 34-24 51-7l-51 44-51-44z" {...strokeProps}/><path d="M55 49c0-14 10-25 25-25s25 11 25 25" {...strokeProps}/><circle cx="80" cy="38" r="9" className="illustration-fill"/></>;
      case "industry":
        return <><path d="M25 108V55l31 15V55l31 15V45l28 14v49H25zM103 45V25h13v35" {...strokeProps}/><path d="M39 86h12v22H39zm26 0h12v22H65zm26 0h12v22H91z" className="illustration-fill"/><path d="M116 31c12-9 23-2 18 8" {...strokeProps}/></>;
      case "equality":
        return <><circle cx="55" cy="48" r="22" {...strokeProps}/><circle cx="105" cy="48" r="22" {...strokeProps}/><path d="M55 70v39m-16-17h32m34-22v39m-16 0h32m-16-39 16-16m-2 2v13m0-13h-13" {...strokeProps}/><path d="M75 41h10v14H75z" className="illustration-fill"/></>;
      case "culture":
        return <><path d="M29 91c22-2 37-17 42-45l7-25 13 9-11 22c-10 27-1 43 17 57L29 91z" {...strokeProps}/><path d="M93 43c13-7 27-4 38 7-13 13-27 16-42 8" {...strokeProps}/><circle cx="111" cy="52" r="5" className="illustration-fill"/></>;
      case "planning":
        return <><path d="M26 106h108M37 106V55h56v51M49 55V38h31v17M56 69v13m20-13v13m-20 10v14m20-14v14" {...strokeProps}/><path d="M96 106V69h25v37M108 69c-12-12-8-26 6-34 6 14 4 25-6 34z" {...strokeProps}/><path d="M37 55h56v12H37z" className="illustration-fill"/></>;
      case "nature":
        return <><path d="M80 108V53M80 77c-21 0-35-16-34-42 24 0 36 15 34 42zm0-8c20 0 35-14 34-37-21 0-34 13-34 37z" {...strokeProps}/><path d="M28 108h104" {...strokeProps}/><circle cx="36" cy="29" r="10" className="illustration-fill"/></>;
      case "health":
        return <><path d="M44 25h72v84H44z" {...strokeProps}/><path d="M67 49h26m-13-13v26M58 82h12v27H58zm32 0h12v27H90z" {...strokeProps}/><path d="M23 109h114" {...strokeProps}/><path d="M103 27h11v21h-11z" className="illustration-fill"/></>;
      case "international":
        return <><circle cx="80" cy="66" r="43" {...strokeProps}/><path d="M37 66h86M80 23c-17 16-23 29-23 43s6 27 23 43m0-86c17 16 23 29 23 43s-6 27-23 43" {...strokeProps}/><path d="M49 39c18 10 44 10 62 0M49 93c18-10 44-10 62 0" {...strokeProps}/><path d="m122 24 12 6-12 6z" className="illustration-fill"/></>;
      case "europe":
        return <><circle cx="80" cy="66" r="43" {...strokeProps}/>{[0,1,2,3,4,5,6,7,8,9,10,11].map((n)=><circle key={n} cx={80 + 31*Math.cos((n*30-90)*Math.PI/180)} cy={66 + 31*Math.sin((n*30-90)*Math.PI/180)} r="2.4" className="illustration-fill"/>)}<path d="M63 55h34v24H63zM70 55V45h20v10" {...strokeProps}/></>;
      case "digital":
        return <><rect x="30" y="27" width="100" height="69" rx="4" {...strokeProps}/><path d="M62 112h36M72 96v16m16-16v16M53 61l14-12m-14 12 14 12m40-12L93 49m14 12L93 73M75 81l10-40" {...strokeProps}/><path d="M34 31h22v12H34z" className="illustration-fill"/></>;
      case "security":
        return <><path d="M80 20c15 12 29 16 43 17v30c0 24-15 37-43 48-28-11-43-24-43-48V37c14-1 28-5 43-17z" {...strokeProps}/><path d="m58 69 14 14 31-33" {...strokeProps}/><path d="M80 20c15 12 29 16 43 17v13H80z" className="illustration-fill"/></>;
      case "immigration":
        return <><rect x="31" y="27" width="72" height="86" rx="4" {...strokeProps}/><circle cx="67" cy="59" r="14" {...strokeProps}/><path d="M43 91c11-19 37-19 48 0M113 47h20m-9-9 9 9-9 9M113 79h20m-9-9 9 9-9 9" {...strokeProps}/><path d="M31 27h72v12H31z" className="illustration-fill"/></>;
      case "agriculture":
        return <><path d="M25 108h110M38 108V63l42-26 42 26v45M55 108V75h50v33" {...strokeProps}/><path d="M80 37V20m0 0c-12 0-20 7-20 18 12 0 20-7 20-18zm0 0c12 0 20 7 20 18-12 0-20-7-20-18z" {...strokeProps}/><path d="m80 51 22 14H58z" className="illustration-fill"/></>;
      case "housing":
        return <><path d="M25 108h110M36 108V56l35-28 35 28v52M106 70l18-14v52M52 70h15v18H52zm33 0h8v38h-8z" {...strokeProps}/><path d="M112 48c-7-14 2-25 16-28 3 14-3 24-16 28z" {...strokeProps}/><path d="M36 56h70v13H36z" className="illustration-fill"/></>;
      case "energy":
        return <><circle cx="80" cy="67" r="14" {...strokeProps}/><path d="M80 20v17m0 60v17M33 67h17m60 0h17M47 34l12 12m42 42 12 12m0-66-12 12M59 88l-12 12" {...strokeProps}/><path d="M80 48c7 0 13 4 17 10l-17 9V48zm17 10c4 7 3 14 0 20l-17-11 17-9zM80 67v20c-8 0-14-4-17-10l17-10z" className="illustration-fill"/></>;
      case "family":
        return <><circle cx="56" cy="43" r="14" {...strokeProps}/><circle cx="104" cy="43" r="14" {...strokeProps}/><circle cx="80" cy="68" r="10" {...strokeProps}/><path d="M29 108c0-25 10-42 27-42s24 11 24 27c0-16 7-27 24-27s27 17 27 42M63 108c0-18 6-30 17-30s17 12 17 30" {...strokeProps}/><path d="M68 28h24v9H68z" className="illustration-fill"/></>;
      default:
        return null;
    }
  })();

  return (
    <div className="program-illustration" aria-hidden="true">
      <svg viewBox="0 0 160 130" focusable="false">{art}</svg>
    </div>
  );
}

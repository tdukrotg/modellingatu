// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GroupFilter/setting/nls/strings":{configText:"\u017demiau nurodykite savo filtr\u0173 grupes",labels:{groupName:"Filtr\u0173 rinkinio pavadinimas:",groupNameTip:"Filtro, i\u0161 kurio naudotojas rinksis, pavadinimas.",groupDesc:"Apra\u0161ymas:",groupDescTip:"Filtr\u0173 rinkinio apra\u0161ymas.",groupOperator:"I\u0161 anksto nustatytas operatorius:",groupOperatorTip:"I\u0161 anksto nustatyto filtro operatoriaus parinktis. Jei nepasirenkamas i\u0161 anksto nustatytas operatorius, filtras naudos operatori\u0173 Lygu.",
groupDefault:"I\u0161 anksto nustatyta reik\u0161m\u0117:",groupDefaultTip:"Reik\u0161m\u0117s pasirinkimo i\u0161 esamo sluoksnio parinktis.",sameLayerAppend:"Kai sluoksnis nurodytas daugiau nei kart\u0105:",sameLayerConjunc:"Prid\u0117ti naudojim\u0105:",caseSearch:"Atlikti paie\u0161k\u0105 skiriant did\u017ei\u0105sias ir ma\u017e\u0105sias raides: "},buttons:{addNewGroup:"Prid\u0117ti nauj\u0105 grup\u0119",addNewGroupTip:"Prid\u0117ti nauj\u0105 filtr\u0173 rinkin\u012f.",addLayer:"Prid\u0117ti sluoksn\u012f",
addLayerTip:"Prie filtr\u0173 rinkinio prid\u0117ti sluoksn\u012f."},inputs:{groupName:"Pavadinkite savo grup\u0119",groupDesc:"J\u016bs\u0173 grup\u0117s apra\u0161ymas",groupDefault:"\u012evesti i\u0161 anksto nustatyt\u0105 reik\u0161m\u0119",sameLayerAny:"Atitinka bet kuri\u0105 s\u0105lyg\u0105",sameLayerAll:"Atitinka visas s\u0105lygas",simpleMode:"Prad\u0117ti paprastoje per\u017ei\u016bros aplikacijoje",simpleModeTip:"Sukonfig\u016bruotos valdiklio s\u0105sajos supaprastinimo parinktis. Kai pa\u017eym\u0117ta, i\u0161 s\u0105sajos pa\u0161alinami operatoriaus s\u0105ra\u0161o i\u0161pl\u0117timo ir kriterij\u0173 prid\u0117jimo mygtukai.",
webmapAppendModeAny:"Prid\u0117ti bet kurias s\u0105lygas prie naudojamo \u017eem\u0117lapio filtro",webmapAppendModeAll:"Prid\u0117ti visas s\u0105lygas prie naudojamo \u017eem\u0117lapio filtro",webmapAppendModeTip:"Parinktis prid\u0117ti filtr\u0173 rinkin\u012f prie naudojamo \u017einiatinklio \u017eem\u0117lapio filtro.",persistOnClose:"Taikyti po to, kai u\u017edaromas valdiklis",optionsMode:"Sl\u0117pti valdiklio parinktis",optionsModeTip:"Papildom\u0173 valdiklio parametr\u0173 rodymo parinktis. Jei pa\u017eym\u0117ta, i\u0161 s\u0105sajos pa\u0161alinamas apibr\u0117\u017et\u0173 filtr\u0173 \u012fra\u0161ymas ir \u012fk\u0117limas bei filtro\u00a0i\u0161laikymas po to, kai u\u017edaromas valdiklis.",
optionOR:"ARBA",optionAND:"IR",optionEQUAL:"LYGU",optionNOTEQUAL:"NELYGU",optionGREATERTHAN:"DAUGIAU NEGU",optionGREATERTHANEQUAL:"DAUGIAU NEGU ARBA LYGU",optionLESSTHAN:"MA\u017dIAU NEGU",optionLESSTHANEQUAL:"MA\u017dIAU NEGU ARBA LYGU",optionSTART:"PRASIDEDA",optionEND:"BAIGIASI",optionLIKE:"APIMA",optionNOTLIKE:"NEAPIMA",optionONORBEFORE:"YRA ANT ARBA PRIE\u0160",optionONORAFTER:"YRA ANT ARBA PO",optionNONE:"N\u0116RA"},tables:{layer:"Sluoksniai",layerTip:"Sluoksnio pavadinimas, kaip nurodyta \u017eem\u0117lapyje.",
field:"Laukai",fieldTip:"Laukas, kuriame bus i\u0161filtruotas sluoksnis.",value:"Naudoti reik\u0161m\u0119",valueTip:"I\u0161 sluoksnio i\u0161krentan\u010dio s\u0105ra\u0161o reik\u0161mi\u0173\u00a0naudojimo parinktis. Jei \u0161io parametro nenaudoja joks sluoksnis, naudotojui bus pateiktas paprastas teksto laukas.",zoom:"Didinti",zoomTip:"Didinimo parinktis, siekiant apr\u0117pti elementus pritaikius filtr\u0105.\u00a0Didinimui\u00a0galima pasirinkti tik vien\u0105 sluoksn\u012f.",action:"Pa\u0161alinti",
actionTip:"Pa\u0161alinti sluoksn\u012f i\u0161 filtr\u0173 rinkinio."},popup:{label:"Pasirinkti reik\u0161m\u0119"},errors:{noGroups:"B\u016btina tur\u0117ti nors vien\u0105 grup\u0119.",noGroupName:"Tr\u016bksta vienos arba keli\u0173 grupi\u0173 pavadinim\u0173.",noDuplicates:"Dubliuojami vienos arba keli\u0173 grupi\u0173 pavadinimai.",noRows:"Lentel\u0117je turi b\u016bti bent viena eilut\u0117.",noLayers:"J\u016bs\u0173 \u017eem\u0117lapyje n\u0117ra sluoksni\u0173."},picker:{description:"Naudokite \u0161i\u0105 form\u0105 nor\u0117dami rasti i\u0161 anksto nustatytas \u0161ios grup\u0117s reik\u0161mes.",
layer:"Pasirinkite sluoksn\u012f",layerTip:"Sluoksnio pavadinimas, kaip nurodyta internetiniame \u017eem\u0117lapyje.",field:"Pasirinkite lauk\u0105",fieldTip:"Laukas, kurio i\u0161 anksto nustatyta reik\u0161m\u0117 bus naudojama.",value:"Pasirinkite reik\u0161m\u0119",valueTip:"Reik\u0161m\u0117, kuri valdikliui bus numatytoji."},_localized:{}}});
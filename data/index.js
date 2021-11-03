import { AKUMA, ALISA, ANNA,ARMORKING,ASUKA,BOB,BRYAN,CLAUDIO,DEVILJIN,DRAGUNOV,EDDY,ELIZA,FAHKUMRAM,FENG,GANRYU,
        GEESE,GIGAS,HEIHACHI,HWOARANG,JACK7,JIN,JOSIE,JULIA,KATARINA,KAZUMI,KAZUYA,KING,KUMA,KUNIMITSU,LARS,LAW,
        LEE,LEI,LEO,LEROY,LIDIA,LILI,LUCKY,MARDUK,MASTERRAVEN,MIGUEL,NEGAN,NINA,NOCTIS,PAUL,SHAHEEN,STEVE, XIAOYU ,YOSHIMITSU ,ZAFINA 
    } from './dataFrame';

import { AKUMAMT, ALISAMT, ANNAMT,ARMORKINGMT,ASUKAMT,BOBMT,BRYANMT,CLAUDIOMT,DEVILJINMT,DRAGUNOVMT,EDDYMT,ELIZAMT,FAHKUMRAMMT,FENGMT,GANRYUMT,
        GEESEMT,GIGASMT,HEIHACHIMT,HWOARANGMT,JACK7MT,JINMT,JOSIEMT,JULIAMT,KATARINAMT,KAZUMIMT,KAZUYAMT,KINGMT,KUMAMT,KUNIMITSUMT,LARSMT,LAWMT,
        LEEMT,LEIMT,LEO,LEROYMT,LIDIAMT,LILIMT,LUCKYMT,MARDUKMT,MASTERRAVENMT,MIGUELMT,NEGANMT,NINAMT,NOCTISMT,PAULMT,SHAHEENMT,STEVEMT, XIAOYUMT ,YOSHIMITSUMT ,ZAFINAMT 
    } from './dataMeta';


const charName = [
    'AKUMA','ALISA','ANNA','ARMOR KING','ASUKA','BOB','BRYAN','CLAUDIO','DEVIL JIN','DRAGUNOV','EDDY','ELIZA','FAHKUMRAM','FENG','GANRYU',
    'GEESE','GIGAS','HEIHACHI','HWOARANG','JACK-7','JIN','JOSIE','JULIA','KATARINA','KAZUMI','KAZUYA','KING','KUMA','KUNIMITSU','LARS','LAW',
    'LEE','LEI','LEO','LEROY','LIDIA','LILI','LUCKY CHLOE','MARDUK','MASTER RAVEN','MIGUEL','NEGAN','NINA','NOCTIS','PAUL','SHAHEEN','STEVE',
    'XIAOYU','YOSHIMITSU','ZAFINA'
];

const charFrame = [
    AKUMA, ALISA, ANNA,ARMORKING,ASUKA,BOB,BRYAN,CLAUDIO,DEVILJIN,DRAGUNOV,EDDY,ELIZA,FAHKUMRAM,FENG,GANRYU,
    GEESE,GIGAS,HEIHACHI,HWOARANG,JACK7,JIN,JOSIE,JULIA,KATARINA,KAZUMI,KAZUYA,KING,KUMA,KUNIMITSU,LARS,LAW,
    LEE,LEI,LEO,LEROY,LIDIA,LILI,LUCKY,MARDUK,MASTERRAVEN,MIGUEL,NEGAN,NINA,NOCTIS,PAUL,SHAHEEN,STEVE, XIAOYU ,YOSHIMITSU ,ZAFINA 
];

const charMeta = [
    AKUMAMT, ALISAMT, ANNAMT,ARMORKINGMT,ASUKAMT,BOBMT,BRYANMT,CLAUDIOMT,DEVILJINMT,DRAGUNOVMT,EDDYMT,ELIZAMT,FAHKUMRAMMT,FENGMT,GANRYUMT,
    GEESEMT,GIGASMT,HEIHACHIMT,HWOARANGMT,JACK7MT,JINMT,JOSIEMT,JULIAMT,KATARINAMT,KAZUMIMT,KAZUYAMT,KINGMT,KUMAMT,KUNIMITSUMT,LARSMT,LAWMT,
    LEEMT,LEIMT,LEO,LEROYMT,LIDIAMT,LILIMT,LUCKYMT,MARDUKMT,MASTERRAVENMT,MIGUELMT,NEGANMT,NINAMT,NOCTISMT,PAULMT,SHAHEENMT,STEVEMT, XIAOYUMT ,YOSHIMITSUMT ,ZAFINAMT 
];


export const charData = charName.map((item,i) => {
    return (
        [{title: item, dataFrame: charFrame[i], dataMeta: charMeta[i]}]
    ) 
});

// export const charData = [
//         {title: 'AKUMA', dataFrame: AKUMA, dataMeta: AKUMAMT },
//         {title: 'ALISA', dataFrame: ALISA, dataMeta: ALISAMT },
//         {title: 'ANNA', dataFrame: ANNA, dataMeta: ANNAMT },
//         {title: 'ARMOR KING', dataFrame: ARMORKING, dataMeta: ARMORKINGMT },
//         {title: 'ASUKA', dataFrame: ASUKA, dataMeta: ASUKAMT },
//         {title: 'BOB', dataFrame: BOB, dataMeta: BOBMT },
//         {title: 'BRYAN', dataFrame: BRYAN, dataMeta: BRYANMT },
//         {title: 'CLAUDIO', dataFrame: CLAUDIO, dataMeta: CLAUDIOMT },
//         {title: 'DEVIL JIN', dataFrame: DEVILJIN, dataMeta: DEVILJINMT },
//         {title: 'DRAGUNOV', dataFrame: DRAGUNOV, dataMeta: DRAGUNOVMT },
//         {title: 'EDDY', dataFrame: EDDY, dataMeta: EDDYMT },
//         {title: 'ELIZA', dataFrame: ELIZA, dataMeta: ELIZAMT },
//         {title: 'FAHKUMRAM', dataFrame: FAHKUMRAM, dataMeta: FAHKUMRAMMT },
//         {title: 'FENG', dataFrame: FENG, dataMeta: FENGMT },
//         {title: 'GANRYU', dataFrame: FAHKUMRAM, dataMeta: FAHKUMRAMMT },
//         {title: 'GEESE', dataFrame: GEESE, dataMeta: GEESEMT },
//         {title: 'GIGAS', dataFrame: GIGAS, dataMeta: GIGASMT },
//         {title: 'HEIHACHI', dataFrame: HEIHACHI, dataMeta: HEIHACHIMT },
//         {title: 'GEESE', dataFrame: GEESE, dataMeta: GEESEMT },
//         {title: 'HWOARANG', dataFrame: HWOARANG, dataMeta: HWOARANGMT },
//     ];

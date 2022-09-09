import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlueGt } from "components/common/BlueGt";
import { MoveContainer } from "components/common/Container";
import { Title } from "components/common/Description";
import { StyledInput, StyledTextarea } from "components/common/Input/styles";
import { RadioContainer } from "components/pages/create/3";
import { FormContainer, GobackAnchor, GroupDescription } from "components/pages/create/styles";
import { motion } from "framer-motion";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import styles from "../../styles/radio.module.css";

import food from "/public/icons/food.svg";
import lPolygon from "/public/icons/lPolygon.svg";
import rPolygon from "/public/icons/rPolygon.svg";
import run from "/public/icons/run.svg";

export default function SetMission() {
  const [mission, setMission] = useState("");
  const [aboutMission, setAboutMission] = useState("");

  const onMission = (e: any) => {
    setMission(e.currentTarget.value);
  };
  const onAboutMission = (e: any) => {
    setAboutMission(e.currentTarget.value);
  };

  const [val, setVal] = useState("");

  return (
    <FormContainer variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
      <MoveContainer>
        <Link href="/create/2" passHref>
          <GobackAnchor variants={defaultFadeInVariants}>
            <Image alt={"back"} src={lPolygon} />
          </GobackAnchor>
        </Link>
        <motion.span variants={defaultFadeInVariants}>
          <b>3</b> / 4
        </motion.span>
      </MoveContainer>
      <Title variants={defaultFadeInVariants}>
        미션에 대한
        <br />
        정보를 알려주세요.
      </Title>

      <RadioContainer variants={defaultFadeInVariants}>
        <input
          className={styles.radio}
          type="radio"
          id="food"
          value="food"
          name="mission"
          onChange={() => setVal("food")}
        />
        <label htmlFor="food">
          <Image src={food} alt="food" />
          식이 조절
        </label>
        <input
          className={styles.radio}
          type="radio"
          id="work"
          value="work"
          name="mission"
          onChange={() => setVal("work")}
        />
        <label htmlFor="work">
          <Image src={run} alt="run" />
          일상 운동
        </label>
      </RadioContainer>
      <GroupDescription variants={defaultFadeInVariants}>
        미션의 제목을 입력해주세요.
      </GroupDescription>
      <StyledInput
        variants={defaultFadeInVariants}
        onChange={onMission}
        value={mission}
        placeholder="미션의 제목을 입력해주세요."
      />
      <GroupDescription variants={defaultFadeInVariants}>
        미션의 내용을 입력해주세요.
      </GroupDescription>
      <StyledTextarea
        value={aboutMission}
        onChange={onAboutMission}
        variants={defaultFadeInVariants}
        placeholder="미션의 내용을 입력해주세요."
      />
      <Link href="/create/4" passHref>
        <BlueGt>
          <Image alt={"next"} src={rPolygon} />
        </BlueGt>
      </Link>
    </FormContainer>
  );
}
import { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import BlueNextAnchor from "components/common/BlueNextAnchor";
import { MoveContainer } from "components/common/Container";
import { Title } from "components/common/Description";
import StepIndicator from "components/pages/create/StepIndicator";
import { FormContainer } from "components/pages/create/styles";
import { intervalToDuration } from "date-fns";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

const BetweenDayWrapper = styled(motion.div)`
  display: flex;
  text-align: center;
  width: 156px;
  height: 40px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  border-bottom: thin solid;
`;

const BetweenDaySpan = styled(motion.span)`
  width: 156px;
`;

const BetweenDayTextSpan = styled(motion.span)`
  color: ${({ theme }) => theme.color.black500};
`;

const DatePickerWrapper = styled(motion.div)`
  margin-top: 30px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SetDayPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [durationDay, setDurationDay] = useState(0);

  return (
    <FormContainer variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
      <MoveContainer>
        <StepIndicator currentStep={1} totalSteps={4} />
      </MoveContainer>
      <Title variants={defaultFadeInVariants}>
        미션 기간은
        <br />
        어느 정도인가요?
      </Title>
      <BetweenDayWrapper variants={defaultFadeInVariants}>
        <BetweenDaySpan variants={defaultFadeInVariants}>{`${durationDay}`}</BetweenDaySpan>
        <BetweenDayTextSpan variants={defaultFadeInVariants}>일</BetweenDayTextSpan>
      </BetweenDayWrapper>
      <DatePickerWrapper variants={defaultFadeInVariants}>
        <DatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={([start, end]: [Date, Date]) => {
            setStartDate(start);
            setEndDate(end);
            if (!end) {
              setDurationDay(0);
              return;
            }

            const day = intervalToDuration({ start, end }).days;

            if (!day) {
              return;
            }

            setDurationDay(day + 1);
          }}
          inline
          selectsRange
        />
      </DatePickerWrapper>
      <Link href="/create/2" passHref>
        <BlueNextAnchor />
      </Link>
    </FormContainer>
  );
}

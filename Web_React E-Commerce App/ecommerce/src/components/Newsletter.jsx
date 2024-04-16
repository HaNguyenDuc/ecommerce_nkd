// import { Send } from "@material-ui/icons";
import React, { useRef } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import emailjs from "@emailjs/browser";
const Container = styled.div`
  height: 60vh;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-family: "Poppins", sans-serif;
  color: #757575;
  font-size: 15px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 45%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 3;
  border: none;
  background-color: #000000;
  color: white;
`;

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9gwugqa",
      "template_50meekj",
      form.current,
      "zjRByL0fWqBu1pstG"
    );
    e.target.reset();
  };
  return (
    <Container>
      <Title>Feedback cửa hàng</Title>
      <Desc>
        Hãy đưa ra cảm ơn của bạn để cửa hàng tốt hơn mỗi ngày. Xin cảm ơn!
      </Desc>
      <form
        className="contact__form"
        ref={form}
        onSubmit={sendEmail}
        style={{ width: "600px", height: "200px" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InputContainer style={{ marginRight: "10px" }}>
            <Input placeholder="Name" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Your email" />
          </InputContainer>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <InputContainer style={{ width: "550px" }}>
            <Input placeholder="Nội dung đánh giá" />{" "}
            <Button>
              {/* <Send /> */}
              Gửi feedback ngay!
            </Button>
          </InputContainer>{" "}
        </div>
      </form>
    </Container>
  );
};

export default Newsletter;

// import React, { useRef } from "react";
// import styled from "styled-components";
// import emailjs from "@emailjs/browser";

// const ContactSection = styled.section`
//   background-color: #f7f7f7;
//   padding: 80px 0;
// `;

// const ContactContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, max-content);
//   justify-content: center;
//   column-gap: 6rem;
//   padding-bottom: 3rem;

//   @media screen and (max-width: 992px) {
//     column-gap: 3rem;
//   }

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//     row-gap: 3rem;
//   }

//   @media screen and (max-width: 576px) {
//     .contact__info {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

// const ContactContent = styled.div`
//   text-align: center;
// `;

// const ContactTitle = styled.h3`
//   font-size: var(--h3-font-size);
//   font-weight: var(--font-medium);
//   margin-bottom: var(--mb-1-5);
// `;

// const ContactInfo = styled.div`
//   display: grid;
//   row-gap: 1rem;
//   grid-template-columns: 300px;
// `;

// const ContactCard = styled.div`
//   background-color: var(--container-color);
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   padding: 1rem;
//   border-radius: 0.75rem;
//   text-align: center;
// `;

// const ContactCardIcon = styled.i`
//   font-size: 2rem;
//   color: var(--title-color);
//   margin-bottom: var(--mb-0-25);
// `;

// const ContactCardTitle = styled.h3`
//   font-size: var(--small-font-size);
//   font-weight: var(--font-medium);
// `;

// const ContactCardData = styled.span`
//   font-size: var(--small-font-size);
//   display: block;
//   margin-bottom: var(--mb-0-75);
// `;

// const ContactButton = styled.a`
//   color: var(--text-color);
//   font-size: var(--small-font-size);
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   column-gap: 0.25rem;

//   &:hover {
//     .contact__button-icon {
//       transform: translate(0.25rem);
//     }
//   }
// `;

// const ContactButtonIcon = styled.i`
//   font-size: 1rem;
//   transition: 0.3s;
// `;

// const ContactForm = styled.form`
//   width: 360px;

//   @media screen and (max-width: 768px) {
//     margin: 0 auto;
//   }
// `;

// const ContactFormDiv = styled.div`
//   position: relative;
//   margin-bottom: var(--mb-2);
//   height: 4rem;
// `;

// const ContactFormTag = styled.label`
//   position: absolute;
//   top: -0.75rem;
//   left: 1.25rem;
//   font-size: var(--smaller-font-size);
//   padding: 0.25rem;
//   background-color: var(--body-color);
//   z-index: 10;
// `;

// const ContactFormInput = styled.input`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border: 2px solid rgba(0, 0, 0, 0.3);
//   background: none;
//   color: var(--text-color);
//   outline: none;
//   border-radius: 0.75rem;
//   padding: 1.5rem;
//   z-index: 1;
// `;

// const ContactFormArea = styled.div`
//   height: 11rem;

//   textarea {
//     resize: none;
//   }
// `;

// const ContactFormTextarea = styled.textarea`
//   resize: none;
// `;

// const Newsletter = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "service_9gwugqa",
//       "template_50meekj",
//       form.current,
//       "zjRByL0fWqBu1pstG"
//     );
//     e.target.reset();
//   };

//   return (
//     <ContactSection className="contact" id="contact">
//       <ContactContainer className="container">
//         <ContactContent>
//           <ContactTitle>Get in touch</ContactTitle>
//           <span className="section__subtitle">Contact Me</span>
//         </ContactContent>

//         <ContactContent>
//           <ContactTitle>Talk to me</ContactTitle>
//           <ContactInfo>
//             <ContactCard>
//               <ContactCardIcon className="bx bx-mail-send"></ContactCardIcon>
//               <ContactCardTitle>Email</ContactCardTitle>
//               <ContactCardData>npc.it.dev@gmail.com</ContactCardData>
//               <ContactButton href="mailto:npc.it.dev@gmail.com">
//                 Write me
//                 <ContactButtonIcon className="bx bx-right-arrow-alt"></ContactButtonIcon>
//               </ContactButton>
//             </ContactCard>

//             <ContactCard>
//               <ContactCardIcon className="bx bxs-phone"></ContactCardIcon>
//               <ContactCardTitle>Zalo</ContactCardTitle>
//               <ContactCardData>+84 869 154 692</ContactCardData>
//               <ContactButton href="https://chat.zalo.me/">
//                 Write me
//                 <ContactButtonIcon className="bx bx-right-arrow-alt"></ContactButtonIcon>
//               </ContactButton>
//             </ContactCard>

//             <ContactCard>
//               <ContactCardIcon className="bx bxl-messenger"></ContactCardIcon>
//               <ContactCardTitle>Messenger</ContactCardTitle>
//               <ContactCardData>NPC</ContactCardData>
//               <ContactButton href="https://www.facebook.com/npcong2704/">
//                 Write me
//                 <ContactButtonIcon className="bx bx-right-arrow-alt"></ContactButtonIcon>
//               </ContactButton>
//             </ContactCard>
//           </ContactInfo>
//         </ContactContent>

//         <ContactContent>
//           <ContactTitle>Write me your project</ContactTitle>
//           <ContactForm ref={form} onSubmit={sendEmail}>
//             <ContactFormDiv>
//               <ContactFormTag>Name</ContactFormTag>
//               <ContactFormInput
//                 type="text"
//                 name="name"
//                 placeholder="Insert your name"
//               />
//             </ContactFormDiv>

//             <ContactFormDiv>
//               <ContactFormTag>Email</ContactFormTag>
//               <ContactFormInput
//                 type="email"
//                 name="email"
//                 placeholder="Insert your email"
//               />
//             </ContactFormDiv>

//             <ContactFormDiv className="contact__form-div contact__form-area">
//               <ContactFormTag>Project</ContactFormTag>
//               <ContactFormTextarea
//                 name="project"
//                 cols="30"
//                 rows="10"
//                 placeholder="Write your project"
//               ></ContactFormTextarea>
//             </ContactFormDiv>

//             <button className="button button--flex">
//               Gửi
//               <svg
//                 className="button__icon"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
//                   fill="var(--container-color)"
//                 ></path>
//                 <path
//                   d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
//                   fill="var(--container-color)"
//                 ></path>
//               </svg>
//             </button>
//           </ContactForm>
//         </ContactContent>
//       </ContactContainer>
//     </ContactSection>
//   );
// };

// export default Newsletter;

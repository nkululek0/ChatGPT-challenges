<script setup>
  import { ref } from "vue";
  import isUnique from "./assets/is-unique";
  
  const uniqueStringInput = ref("");
  const facialExpressionType = {
    thinking: "thinking",
    frowning: "frowning",
    smiling: "smiling"
  }
  
  const checkUniqueString = () => {
    const facialExpressionAttributeHolder = document.querySelector("[attr-facial-expression]");
    let inputString = uniqueStringInput.value;
    uniqueStringInput.value = "";
    
    try {
      let uniqueString = isUnique(inputString);

      if (uniqueString) {
        setFacialExpression("smiling", facialExpressionAttributeHolder);
      }
      else {
        setFacialExpression("frowning", facialExpressionAttributeHolder);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setFacialExpression = (facialExpression, targetElement) => {
    targetElement.setAttribute("attr-facial-expression", facialExpression);
  };
</script>

<template>
  <div class="main-content-container" attr-facial-expression="thinking">
    <div class="facial-expression-main-container">
      <div class="outer-circle">
        <div class="upper-face-container">
          <div class="left-upper-face upper-face">
            <div class="left-eyebrow"></div>
            <div class="left-eye-outer-circle inner-outer-circle">
              <div class="left-eye-pupil eye-pupil"></div>
            </div>
          </div>
          <div class="right-upper-face upper-face">
            <div class="right-eyebrow"></div>
            <div class="right-eye-outer-circle inner-outer-circle">
              <div class="right-eye-pupil eye-pupil"></div>
            </div>
          </div>
        </div>
        <div class="lower-face-container">
          <div class="mouth"></div>
        </div>
      </div>
    </div>
    <div class="user-interactions-container">
      <p class="instruction">Type a unique string</p>
      <div class="user-input-container">
        <form @submit.prevent="checkUniqueString">
          <input type="text" id="greetingStatus" name="greetingStatus" v-model="uniqueStringInput"/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <p class="outcome">
        <span class="unique-string">String is Unique</span>
        <span class="non-unique-string">String is not Unique</span>
      </p>
    </div>

  </div>
</template>

<style scoped>  
  .main-content-container {
    width: 500px;
    height: 75vh;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .facial-expression-main-container {
    width: 150px;
    height: 150px;
  }

  .outer-circle {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: #FEE94C;
  }

  .upper-face-container {
      height: 50%;
  }

  .upper-face {
      width: 50%;
      display: inline-block;
      position: relative;
  }

  .inner-outer-circle {
      top: 39px;
      width: 35px;
      height: 35px;
      border: 1px solid #000;
      border-radius: 50%;
      position: absolute;
      background-color: #fff;
  }

  .right-eyebrow {
      height: 23px;
      border: solid 2px #000;
      border-color: #000 transparent transparent transparent;
      border-radius: 50% / 25px 25px 0 0;
      margin-top: 30px;
      margin-left: 4px;
  }

  .upper-face {
      width: 50%;
      position: relative;
      display: inline-block;
  }

  .right-upper-face {
      float: right;
  }

  .right-eye-outer-circle {
      position: absolute;
      right: 25px;
  }

  .left-eyebrow,
  .right-eyebrow {
    width: 50px;
  }

  .left-eyebrow {
      height: 23px;
      border: solid 2px #000;
      border-color:#000 transparent transparent transparent;
      border-radius: 50%/25px 25px 0 0;
      margin-top: 30px;
      margin-left: 15px;
  }

  .left-eye-outer-circle {
      left: 23px;
  }

  .eye-pupil {
      width: 15px;
      height: 15px;
      background-color: #000;
      margin: 30% 29%;
      border-radius: 50%;
  }

  .lower-face-container {
      height: 50%;
      display: flex;
      align-self: center;
  }

  .mouth {
    width: 70px;
    height: 23px;
    margin-top: 60%;
    border: 1px solid #000;
  }

  .unique-string,
  .non-unique-string {
    display: none;
  }

  /** Frowning Expression **/
  [attr-facial-expression="frowning"] .mouth {
      height: 30px;
      border-color: #000 transparent transparent transparent;
      border-radius: 50% / 25px 25px 0 0;
      margin-top: 50%;
  }

  [attr-facial-expression="frowning"] .non-unique-string {
    display: block;
  }

  /** END Frowning Expression **/

  /** Smiling Expression **/
  [attr-facial-expression="smiling"] .mouth {
    border-radius: 50% / 0px 0px 22px 22px;
    width: 57px;
    background-color: #fff;
  }

  [attr-facial-expression="smiling"] .unique-string {
    display: block;
  }

  /** END Smiling Expression **/

  /** Thinking Expression **/
  [attr-facial-expression="thinking"] .eye-pupil {
      margin: 3px;
  }

  [attr-facial-expression="thinking"] .mouth {
      border-radius: 50% / 0px 0px 0px 0px;
      border-color: #000 transparent transparent transparent;
  }

  /** END Thinking Expression **/
</style>

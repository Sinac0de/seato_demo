import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
/* "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character" */

const phoneRegExp = /((0?9)|(\+?989))\d{9}/g;

export const loginSchema = yup.object().shape({
  loginTel: yup
    .string()
    .matches(phoneRegExp, "لطفا شماره تلفن معتبر وارد کنید.")
    .max(11, "لطفا شماره تلفن معتبر وارد کنید.")
    .required("لطفا شماره تلفن را وارد کنید."),
  loginPass: yup
    .string()
    .min(8, "رمز باید حداقل 8 کاراکتر داشته باشد")
    // different error messages for different requirements
    .matches(/[0-9]/, "لطفا ترکیبی از عدد و حروف وارد کنید.")
    .matches(/[a-z]/, "لطفا ترکیبی از عدد و حروف وارد کنید.")
    .required("لطفا رمز را وارد کنید."),
});

export const signUpSchema = yup.object().shape({
  signUpName: yup.string().required("لطفا نام سالن را وارد کنید."),
  signUpEmail: yup
    .string()
    .email("لطفا ایمیل معتبر وارد کنید.")
    .required("لطفا ایمیل را وارد کنید."),
  signUpPass: yup
    .string()
    .min(8, "حداقل 8 کاراکتر وارد کنید.")
    .matches(passwordRules, { message: "لطفا پسورد قوی تری انتخاب کنید." })
    .required("لطفا رمز را وارد کنید."),
  signUpTel: yup
    .string()
    .matches(phoneRegExp, "لطفا شماره تلفن معتبر وارد کنید.")
    .max(11, "لطفا شماره تلفن معتبر وارد کنید.")
    .required("لطفا شماره تلفن را وارد کنید."),
  signUpAddress: yup
    .string()
    .min(15, "لطفا بیشتر از 15 کاراکتر وارد کنید.")
    .required("لطفا آدرس را وارد کنید."),
});

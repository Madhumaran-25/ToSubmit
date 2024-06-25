const loginData = [
  {
      id: 1,
      header: 'Username',
      placeholder: 'Enter your username',
      regex: /^[a-zA-Z0-9]{5,15}$/,
      secureTextEntry: false,
      keyboardType: 'default'
 },
 {
      id: 2,
      header: 'Password',
      placeholder: 'Enter your password',
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      secureTextEntry: true,
      keyboardType: 'password'
 },
]

const textInputData = [
  {
    id: 1,
    header: 'Name',
    placeholder: 'Enter your name',
    regex: /^[a-zA-Z\s]{1,30}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 2,
    header: 'Username',
    placeholder: 'Enter your username',
    regex: /^[a-zA-Z0-9]{5,15}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 3,
    header: 'Password',
    placeholder: 'Enter your password',
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    secureTextEntry: true,
    keyboardType: 'numeric',
    value: '',
    isValid: true
  },
  {
    id: 4,
    header: 'Mobile',
    placeholder: 'Enter your mobile number',
    regex: /^[0-9]{10}$/,
    secureTextEntry: false,
    keyboardType: 'numeric',
    value: '',
    isValid: true
  },
  {
    id: 5,
    header: 'Email',
    placeholder: 'Enter your email',
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    secureTextEntry: false,
    keyboardType: 'email-address',
    value: '',
    isValid: true
  },
  {
    id: 6,
    header: 'Residence',
    placeholder: 'Enter your residence',
    regex: /^[a-zA-Z0-9\s,.'-]{3,}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 7,
    header: 'City',
    placeholder: 'Enter your city',
    regex: /^[a-zA-Z ]{2,30}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 8,
    header: 'State',
    placeholder: 'Enter your state',
    regex: /^[a-zA-Z ]{2,30}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 9,
    header: 'Country',
    placeholder: 'Enter your country',
    regex: /^[a-zA-Z ]{2,30}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 10,
    header: 'Zip Code',
    placeholder: 'Enter your zip code',
    regex: /^[0-9]{5,6}$/,
    secureTextEntry: false,
    keyboardType: 'numeric',
    value: '',
    isValid: true
  },
  {
    id: 11,
    header: 'Company',
    placeholder: 'Enter your company name',
    regex: /^[a-zA-Z0-9\s,.'-]{2,}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 12,
    header: 'Job Title',
    placeholder: 'Enter your job title',
    regex: /^[a-zA-Z ]{2,30}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 13,
    header: 'Bio',
    placeholder: 'Enter your bio',
    regex: /^.{10,300}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 14,
    header: 'Website',
    placeholder: 'Enter your website',
    regex: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 15,
    header: 'LinkedIn',
    placeholder: 'Enter your LinkedIn profile',
    regex: /^https?:\/\/(www\.)?linkedin\.com\/.*$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
  {
    id: 16,
    header: 'Twitter',
    placeholder: 'Enter your Twitter handle',
    regex: /^@?(\w){1,15}$/,
    secureTextEntry: false,
    keyboardType: 'default',
    value: '',
    isValid: true
  },
];

const ProductItems = [
  {
    id: 1,
    name: 'Kara Sevu',
    image: require('../images/sevu.png'),
    price: 50,
  },
  {
    id: 2,
    name: 'Seeval sevu',
    image: require('../images/sevu.png'),
    price: 50,
  },
  {
    id: 3,
    name: 'Inipu sevu',
    image: require('../images/sevu.png'),
    price: 45,
  },
  {
    id: 4,
    name: 'Omam sevu',
    image: require('../images/sevu.png'),
    price: 46,
  },
  {
    id: 5,
    name: 'milagu sevu',
    image: require('../images/sevu.png'),
    price: 40,
  },
  {
    id: 6,
    name: 'Muruku sevu',
    image: require('../images/sevu.png'),
    price: 42,
  },
  {
    id: 7,
    name: 'Mixture',
    image: require('../images/sevu.png'),
    price: 45,
  },
  {
    id: 8,
    name: 'Jelabi ',
    image: require('../images/sevu.png'),
    price: 50,
  },
];

const strings = 
  {
    createPost : "Create Post",
    update : "UPDATE",
    delete : "DELETE",
    title : "Title",
    body : "Body",
    userid : "User ID",
    addTocart: "Add To Cart",
    freeDelivery: "Your Order is eligible for free delivery",
    clearCart: "Clear cart",
    login: "Login",
    GoogleSignIn: "Sign in with Google",
    FacebookSignIn: "Sign in with Facebook",
    Totalamount: "Total Amount",
    Home: "Home",
    Products: "Products",
    LoginForm: "Form",
    Cart: "Cart",
    save: "Save",

  }



export {
  ProductItems,
  loginData,
  textInputData,
  strings,
};

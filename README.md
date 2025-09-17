# WTWR (What to Wear) Project

The WTWR (What to Wear) project is a React-based application that helps users select suitable clothing based on real-time weather data. Users can securely sign up and sign in to access the app's features, including uploading and managing their clothing items. The app integrates with a weather API to display the current temperature and location, with smart weather visualization that adapts to both weather conditions and time of day. The interface dynamically filters clothing items based on the weather conditions and provides an intuitive, time-aware experience that helps users make better clothing choices throughout the day.

The site, now hosted on Vercel (previously Google Cloud Services), integrates both front-end and back-end functionalities, with advanced middleware for error handling, data validation, and logging. Additionally, the project is secured using HTTPS, SSL, and Certbot, and employs PM2 and NGINX to ensure efficient and continuous operation.

# Key features include:

- 👕 **Clothing Cards**: Dynamically generated from a hard-coded array of data.

- ☁️ **Dynamic Weather Display**: Smart weather cards that adapt to both current conditions and time of day, showing appropriate day/night imagery for each weather state.

- 🌗 **Time-Aware UI**: Automatic switching between day and night modes based on local time, enhancing visual context.

- 🖱️ **Event Handling**: Implementing interactive modals for adding new garments and viewing garment details.

- 🔄 **State Management**: Using React's state management to store and update temperature and location data.

- 🛡️**Error Handling**: Centralized error-handling middleware using Joi and Celebrate validators.

- 📝**Request and Error Logging**: Middleware for logging requests and errors to enhance debugging and monitoring.

- 🔐**Secure Hosting**: Hosted on Google Cloud Services with HTTPS and SSL encryption for safe data transmission.

- ⚡**High Availablity**: Utilized PM2 and NGINX for smooth and continuous site operation.

- 🧪**Automated Tests**: Added tests to ensure reliable functionality and validate key features.

# Technologies and Tools used:

- ⚛️ **React**: Leveraging React's component-based architecture for efficient UI development.

- ⚡ **Vite**: Used for the fast and efficient build process.

- 💻 **JavaScript (ES6+)**: Core language used in the project.

- 🎨 **CSS**: Custom styling based on a provided Figma design.

- 🌐 **Vercel**: Hosting both the front-end and back-end with custom subdomains for easy navigation.

- 🚀 **PM2 and NGINX**: For process management and reverse proxy configuration.

- 🔒 **Certbot and SSL**: Ensuring secure communication with HTTPS.

- 🧹 **Celebrate & Joi Validators**: Middleware for inbound server data validation.

- 📝 **Winston & Express-Winston**: For structured request and error logging.

- 🧪 **Jest**: For creating and running automated tests to ensure stability and reliability.

## Links:

- Visit the live site here: [wtwr.angeljuarez.dev](https://wtwr.angeljuarez.dev)

- Checkout the back-end: [Back-End -- Github Repo](https://github.com/ajuarezse/se_project_express)

- See the design I used: [Design -- Figma](https://www.figma.com/file/bfVOvqlLmoKZ5lpro8WWBe/Sprint-14_-WTWR?t=3hvVWRz9LUFsxyNn-6)

---

# Future Plans

- 🎨 Implement loading state animations
- 📱 Improve mobile responsiveness
- 💨 Display wind speed and humidity data
- 📊 Implement usage analytics

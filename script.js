body {
    background-color: #000000;
    font-size: 30px;
    color: rgb(255, 255, 255); 
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center; 
    margin: 0px 0; 
}

#cover {
    position: relative;
    text-align: center;
    height: 100vh; 
    width: 800px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px; 
}

#cover img, #reader img {
    width: auto; 
    height: auto;
    margin-top: 50px; 
}

#reader img {
    transition: opacity 0.5s ease;
}

.btn {
    padding: 15px 30px; 
    font-size: 18px; 
    cursor: pointer;
    margin-top: 20px; 
}

.start-btn {
    padding: 20px 40px; 
    font-size: 20px; 
    background-color: #4CAF50; 
    color: rgb(255, 255, 255); 
    border: none; 
    border-radius: 5px; 
}

#reader {
    background-color: #363636;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto; 
    margin-top: 20px; 
}

.navigation {
    margin-top: 20px; 
    margin-bottom: 40px; 
}

.extra-content {
    padding: 20px;
    background-color: #515151;
    font-size: 20px;
    color: rgb(255, 255, 255);
    margin-top: 20px; 
    width: 2000px; 
    text-align: center; 
    position: relative; 
    z-index: 1; 
}

.next-btn, .back-btn {
    padding: 20px 40px; 
    font-size: 20px; 
    background-color: #4CAF50; 
    color: rgb(255, 255, 255); 
    border: none; 
    border-radius: 5px;
    margin: 10px;
    transition: opacity 0.5s; 
    opacity: 1;  
}

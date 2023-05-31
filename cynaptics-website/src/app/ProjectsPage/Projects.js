
//KEEP A MAX OF 2 DESCRIPTIONS AND A MAX OF 1 VIDEOS AND 2 IMAGES(display_image excluded)
//DONOT ADD A SLASH IN THE TITLE ELSE THAT WILL ACT AS A NEW PATH


export const Projects = [
    {
        id:1,
        project_title:"Face_Recog",
        desc1:'<div>The Backend program :</div><p >The face_rec_video.py file and has been run on jupyter notebook as shown in Test_Video.</p><p >A folder containing known faces to be trained is also uploaded.</p><p >A test video of the face_recognition is also uploaded.</p><p >We have currently implemented face recognition using a library named &apos;face_recognition&apos; and &apos;OpenCV&apos;</p><p >The basic methodology is still quite the same as compared to the standard FaceNet and YOLO application put together:</p><div><div><div> <div>1)Get a database of known images and train the model using functions in &apos;face_recognition&apos;.</div> <div>2)Take input of a live video feed(requires webcam).</div><div>3)Implement &apos;cnn&apos; model to extract features from bounding box.</div><div>4)Compare the features extracted using functions in &apos;face_recognition&apos; with a certain tolerance level for %match.</div><div>5)Display the matched name if tolerance is passed.</div></div></div></div>',
        desc2:'<div>The Frontend program:</div><div><div><div>The frontend program is purely an implementation of FLASK using python and html. <div>To support the styles we have used BOOTSTRAP, CSS</div><div>The structuring of the frontend into html and python files has been accomplished using a library of FLASK called JENGO.</div><div>While debugging for user-friendly purposes, another library called WERKZEUG</div><div>A database called face.db is made in order to store user info. However, the images uploaded is not stored here for the purpose of easy access by the OpenCV.</div>A different folder called Faces replaces the known_faces during deployment of code.</div></div></div><div><br></div>',
        github_link:"https://github.com/CynapticsAI/Face_Recog",
        video:'/videos/projects/project1/video1.mp4',
        display_image:require('../../../public/images/Projects/project1/display_image.jpg'),
        image1:require('../../../public/images/Projects/project1/image1.jpg'),
        image2:require('../../../public/images/Projects/project1/image2.jpg'),
        
    },
    {
        id:2,
        project_title:"ML8-Image Captioning-Video Summarizer",
        desc1:'<div className="text-3xl my-5">Overview</div>Image captioning using attention based encoder-decoder model.The idea is discussed in <a href="https://arxiv.org/abs/1502.03044" className="underline text-red-500">Show, Attend and Tell: Neural Image Caption Generation with Visual Attention</a>. Recurrent Neural Networks (RNN) are used for varied number of applications including machine translation. The Encoder-Decoder architecture is utilized for such settings where a varied-length input sequence is mapped to the varied-length output sequence. The same network can also be used for image captioning. We used a ResNet with pretrained weights as encoder to make feature vectors from the input images and GRU an variant of RNN as decoder.Now for Video Summarization using OpenCV library we will capture frames in video at specific time interval(1 frame per 2 seconds) and we will generate captions to all these frames using above said Image captioning model and retain only those captions which have a low similarity score with the immediate previous caption and that Threshold similarity score is 0.5.Then we perform Abstractive Summarization using T5 base Transformer model',
        desc2:'<div className="text-3xl my-5">Implementation</div>In the image_captioning_.ipynb we download the datasets and all of the preprocessing training and evaluation takes place.<div>>Dataset Used: MS-COCO(subset containing 15000 randomly shuffled images)</div><div>Vocabulary: The vocabulary consists of mapping between words and indices(we limited the size of vocabulary to 5000 instead of 10000 as discussed in paper to save memory)</div><div>Encoder: ResNet without the final classification layer with pretrained weights. we could also try trainig the encoder instead of loading pretrained weights.</div><div>Decoder: GRU(Gated recurrent unit) is used as decoder with Bahdanau attention. Using attention based architechture we can observe which parts of images were identified for generating words(or captions). 2 GRUs are stacked on top of each other and 3 fully connected layers for predictions with 0.25 droupout at every stage in decoder.</div><div>Caption Generation: Based on highest probability/greedy search.</div><div>Training: Teacher forcing is used to reduce training time for the RNN.</div><div>Score: Maximum cosine similarity between the 5 true captions and the predicted caption. Mean cosine similarity of 50 random images : 0.82622829</div><div></div>Video to frames: Using OpenCV</div><div>Transformer used(for Summarization): T5 base</div>',
        github_link:"https://github.com/CynapticsAI/ML8-ImageCaptioning",
        video:'/videos/projects/project2/video1.mp4',
        display_image:require('../../../public/images/Projects/project2/display_image.jpeg'),
        image1:require('../../../public/images/Projects/project2/image1.jpeg'),
        
        
    },
    {
        id:3,
        project_title:"Bosch's Model Extraction Attack For Video Classification",
        desc1:'<div className="text-3xl my-5">Folder Structure</div><div>BlackBox_P1: Contains scripts for training the extracted model from SwinT victim under the Black Box setting. Refer to setup_readme within the folder for detailed instructions on running the code for training.</div><div>BlackBox_P2: Contains scripts for training the extracted model from MoViNet victim under the Black Box setting. Refer to setup_readme within the folder for detailed instructions on running the code for training.</div><div> GreyBox_P1: Contains scripts for training the extracted model from SwinT victim under the Grey Box setting. Refer to setup_readme within the folder for detailed instructions on running the code for training.</div><div>GreyBox_P2: Contains scripts for training the extracted model from MoViNet victim under the Grey Box setting. Refer to setup_readme within the folder for detailed instructions on running the code for training.</div><div>Evaluation_All - Contains Jupyter Notebooks for evaluation. Refer to eval_readme within the folder to get information on the setup and run environment.</div><div><div className="text-3xl my-5">Running Environment</div> Training codes were run on a single server equipped with NVIDIA V100 GPU. Evaluations codes were run on Google Colaboratory with a Pro Plus subscription.</div>',
        github_link:"https://github.com/CynapticsAI/Bosch-InterIIT_2022",
        display_image:require('../../../public/images/Projects/project3/display_image.jpg'),
        image1:require('../../../public/images/Projects/project3/image1.png'),
        
    },
    {
        id:4,
        project_title:"AI-CHAT-BOT",
        desc1:'This is a simple AI Chat Bot, build using rasa framework. Rasa provides flexible conversational AI for building text and voice-based assistants.<div>For Frontend we have used rasa’s standard frontend.</div><div>This chat bot give answer to any general questions related to IIT Indore. This can give answers to questions like about iiti, faculties/Professor, departments, placement, hostels, campus, events, medical facilities, sport facilities, international relations and many other questions.</div>',
        github_link:"https://github.com/CynapticsAI/AI-CHAT-BOT",
        display_image:require('../../../public/images/Projects/project4/display_image.png'),
        image1:require('../../../public/images/Projects/project4/image1.png'),
        
    },
    {
        id:5,
        project_title:"ML18 Rock Paper Scissors Using CV",
        desc1:'A simple Rock-Paper-Scissors game using CV in python For IITISOC-21<div>Rules and procedure to play the interactive game:</div><div>-> While playing the game, make sure that the background is plain (a white wall, a notebook for a background, etc.).</div><div>-> It is preffered to make clear and upright gestures to get best prediction accuracy.</div><div>-> The gesture should lie completely inside the designated box on the right side.</div><div>-> At any time, press "q" to quit the game.</div><div>-> Keep up the volume to enjoy the retro music alongside (^-^) !</div>',
        github_link:"https://github.com/CynapticsAI/ML18_Rock-Paper-Scissors-using-CV",
        display_image:require('../../../public/images/Projects/project5/display_image.png'),
        image1:require('../../../public/images/Projects/Project5/image1.jpg'),
        
        
    },
    {
        id: 6,
        Achievements: "Rank 1",
        project_title: "IITISoC'22 Image Denoising",
        desc1: "With CCTV images not being very clear on zooming there is a great demand for image denoising models. Build a model which takes input of noisy RGB images and outputs denoised images. Carefully study the kind of noise CCTV images have and target accordingly.",
        people_involved:"<div>Khushi Sawla<br>Krish Agrawal<br>Rupal Shah</div>",
        github_link: "https://github.com/CynapticsAI/IITISoC-22-Image-Denoising",
        display_image: require('../../../public/images/Projects/project6/display_image.png'),
        image1: require('../../../public/images/Projects/project6/image1.jpg'),

    },
    {
        id: 7,
        Achievements: "rank 1",
        project_title: "IITIsoc Project: Sign Language Translator",
        desc1: "In this presentation, we will be demonstrating a Computer Vision demo using YOLOv5 on the American Sign Language Dataset including 26 classes.The model identifies signs in real time as well as with input image or audio and builds bounding boxes showing label with confidence value..The model is showcased using streamlit which can take input as an image.",
        people_involved:"<div>Prajakta Darade<br>Samip Shah<br>Saral Sethi<br>Tanisha Sahu</div>",
        github_link: "https://github.com/CynapticsAI/IITISoC-22-Sign-Language-Translator",
        display_image: require('../../../public/images/Projects/project7/display_image.jpeg'),
        image1: require('../../../public/images/Projects/project7/image1.jpg'),

    },
    
]


import image1 from '/src/images/slide-1.jpg'
import image2 from '/src/images/slide-2.jpg'
import image3 from '/src/images/slide-3.jpg'
import image4 from '/src/images/slide-4.jpg'
import image5 from '/src/images/slide-5.jpg'
import image6 from '/src/images/slide-6.jpg'

export const images = [image1, image2, image3, image4, image5, image6]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
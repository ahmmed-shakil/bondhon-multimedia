import { Inbox, Library, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div
      className=" snap-start snap-mandatory py-1 pt-10 md:mb-10 flex justify-center items-center"
      // style={{ height: "calc(100vh-112px)" }}
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="font-semibold text-center mb-4 text-xl">Contact</h3>
        <div className=" grid md:grid-cols-2 gap-4 px-2 pt-8 justify-center items-center">
          <div className=" p-3">
            <h4 className=" text-xl font-semibold font-serif">
              {" "}
              <Library className="inline" /> বন্ধন লাইব্রেরী এন্ড মাল্টিমিডিয়া
            </h4>
            <p className=" mt-2 text-sm">
              <MapPin className=" inline" />
              319, Nurul Amin Khan Road, Gouripur, Mymensing 2270
            </p>
            <div className=" mt-10 grid md:grid-cols-2 grid-cols-1 gap-3 justify-between items-center ">
              <div className=" bg-primary p-2 rounded-md text-white flex flex-col items-center w-full">
                <Inbox className=" w-10 h-10 mb-3" />
                <p> a3.bondhon@gmail.com</p>
              </div>
              <div className=" bg-primary p-2 rounded-md text-white flex flex-col items-center">
                <Inbox className=" w-10 h-10 mb-3" />
                <p> a3.bondhon@gmail.com</p>
              </div>
              <div className=" bg-primary p-2 rounded-md text-white flex flex-col items-center">
                <Phone className=" w-10 h-10 mb-3" />
                <p> +880133435345</p>
              </div>
              <div className=" bg-primary p-2 rounded-md text-white flex flex-col items-center">
                <Phone className=" w-10 h-10 mb-3" />
                <p> +8801334353453</p>
              </div>
            </div>
          </div>
          <div className=" md:block hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463769.6773635834!2d90.32073153204136!3d24.754310202273864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37565653c9dcc273%3A0xf6be7c67b6fabe87!2z4Kas4Kao4KeN4Kan4KaoIOCmsuCmvuCmh-CmrOCnjeCmsOCnh-CmsOCngCDgpo_gpqjgp43gpqEg4Kau4Ka-4Kay4KeN4Kaf4Ka_4Kau4Ka_4Kah4Ka_4Kav4Ka84Ka-!5e0!3m2!1sen!2sbd!4v1726769101183!5m2!1sen!2sbd"
              width="600"
              height="350"
              style={{ border: 0 }}
              className="rounded-md"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

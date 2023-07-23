import Image from "next/image";

import { Block, Menu } from "./components/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-4 px-2 sm:px-16 md:px-60 bg-white">
      <nav className=" py-2 px-16 w-full sm:w-1/2">
        <ul className="flex justify-between content-center">
          <li className="font-main text-xl px-4 group transition duration-300 cursor-pointer">
            <a href="#venue">VENUE</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-yellow-500"></span>
          </li>
          <li className="font-main text-xl px-4 group transition duration-300 cursor-pointer">
            <a href="#info">INFO</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-yellow-500"></span>
          </li>
          <li className="font-main text-xl px-4 group transition duration-300 cursor-pointer">
            <a href="#rsvp">RSVP</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-yellow-500"></span>
          </li>
        </ul>
      </nav>
      <div>
        <div className="relative pt-4">
          <Image
            src="/leaves.svg"
            alt="leaves Logo"
            className=""
            width={550}
            height={500}
            priority
          />
          <div className="absolute -top-5 left-0 w-full h-full flex items-center justify-center">
            <h1 className="font-main text-4xl sm:text-5xl">Ben & Josie</h1>
          </div>
          <div className="absolute top-5 sm:top-10 left-0 pl-2 sm:pl-0 sm:pt-6 w-full h-full flex items-center justify-center">
            <h1 className="font-main text-lg sm:text-2xl">
              INVITE YOU TO CELEBRATE
            </h1>
          </div>
          <div className="absolute pt-4 top-10 sm:top-20 left-0 w-full h-full flex items-center justify-center">
            <h1 className="font-main text-lg sm:text-2xl">THEIR WEDDING!</h1>
          </div>
        </div>
        <div className="py-6 flex justify-center">
          <h1 className="font-main text-2xl">9th DECEMBER 2023</h1>
        </div>
      </div>
      <div className="px-2 md:px-16" id="venue">
        <Block
          title={"THE VENUE"}
          content={
            "Coombe Lodge is a country manor house located on the edge of the village Blagdon in Somerset. To get here enter the postcode 'BS40 7RE' into your navigation. Take the A38 past Bristol Airport to the traffic lights. Turn left onto the A368. After about 3 miles, the entrance to Coombe Lodge is situated on the left, just before Blagdon village. If you're lucky enough to be the designated driver then there is plenty of parking on site at the rear of the property. Please note that you may drive through Bristol's 'Clean Air Zone' when travelling to the venue, so you may want to double check whether your car qualifies to avoid any pesky charges."
          }
          photo={"/coombelodge.jpg"}
          size={400}
        />
        <div id="info">
          <Block
            title={"THE BIG DAY"}
            content={
              "If you're attending the day, please arrive at 1:30pm for the ceremony which will take place at 2pm. Once we've tied the knot, we'll enjoy a few drinks and canapes before the wedding breakfast, which starts at 4pm. After this, we look forward to welcoming our evening guests at 7pm to help us enjoy the rest of the night which includes a live band, hog roast, and more drinks! Lastly, as much as we would love to extend the invite to all of your young ones, the only children that we're able to have on the day are our immediate families."
            }
            photo={"/engaged.jpg"}
            size={300}
          />
        </div>
        <Block
          title={"WHERE TO STAY"}
          content={
            "If you're planning on staying the night then there are plenty of spots to stay close to the venue. We've already allocated the available rooms at Coombe Lodge and the Garden House B&B to our families, but for a list of other nearby options please check out the link below:  "
          }
          photo={"/stay.jpg"}
          size={300}
        />
        <Block
          title={"WHAT TO WEAR"}
          content={
            "The wedding dresscode is formal, so please wear your best glad rags. We have no doubts that you will all be looking fabulous!"
          }
          photo={"/rafa.jpg"}
          size={300}
        />
        <Block
          title={"DO YOU HAVE A GIFT REGISTRY"}
          content={
            "Your attendance is more than enough for us, but if you want to help send us some where sunny for our honeymoon, any contribution towards this is very kind. Alternatively, if you would like to give a gift you are of course very welcome to!"
          }
          photo={"/spain.jpg"}
          size={500}
        />
        <Menu />
        <div className="flex flex-col items-center" id="rsvp">
          <h1 className="font-main text-2xl underline decoration-yellow-500 underline-offset-8 decoration-1">
            AND FINALLY ...
          </h1>
          <div className="w-full xs:w-2/3 pt-2">
            <p className="font-secondary text-center text-sm sm:text-base text-gray-400">
              We'd love to see you there, if there is anything you want to check
              with us beforehand, please don't hesitate to get in touch.
              Otherwise please RSVP below! Can't wait to celebrate our special
              day with you all.
            </p>
          </div>
          <div className="py-4">
            <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-1 px-6 border border-emerald-600 rounded font-main text-2xl pt-4">
              <a href="mailto:josephineward92@gmail.com">RSVP</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

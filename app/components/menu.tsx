import Image from "next/image";

const Menu = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-main text-2xl underline decoration-yellow-500 underline-offset-8 decoration-1">
        THE MENU
      </h1>
      <div className="w-full xs:w-2/3 pt-2">
        <p className="font-secondary text-center text-sm sm:text-base text-gray-400">
          Please choose a starter, main and desert when you RSVP, if you have
          any special dietry requirements please inform us so we can let the
          venue know in advance.
        </p>
      </div>
      <div>
        <div className="pt-4">
          <div className="flex flex-col items-center py-2">
            <h1 className="font-main text-xl">STARTERS:</h1>
            <p className="text-sm sm:text-base font-secondary text-center py-0.5 text-gray-400">
              Sweet potato and parsnip soup
            </p>
            <p className="text-sm sm:text-base font-secondary text-center py-0.5 text-gray-400">
              Gin cured salmon with confit beetroot, pickled cucumber,
              horseradish cream and watercress
            </p>
            <p className="text-sm sm:text-base font-secondary text-center py-0.5 text-gray-400">
              Sweetcorn fritter, baby leaf salad, mango and coriander salsa (v)
            </p>
          </div>
          <div className="flex flex-col items-center py-2">
            <h1 className="font-main text-xl">MAINS:</h1>
            <p className="font-secondary text-center text-sm sm:text-base py-0.5 text-gray-400">
              Chargrilled chicken breast, garlic fondant potato, bacon and pea
              cassoulet, thyme infusion
            </p>
            <p className="font-secondary text-center text-sm sm:text-base py-0.5 text-gray-400">
              Confit duck leg with sage fondant potato, spiced potato puree and
              red wine jus
            </p>
            <p className="font-secondary text-center text-sm sm:text-base py-0.5 text-gray-400">
              Celeriac, parsnip and truffle pithivier, roasted carrot, garlic
              mash, cep sauce (v)
            </p>
          </div>
          <div className="flex flex-col items-center py-2">
            <h1 className="font-main text-xl">DESSERTS:</h1>
            <p className="font-secondary text-center text-sm sm:text-base py-0.5 text-gray-400">
              Sticky toffee pudding, butterscotch sauce and golden guernsey ice
              cream
            </p>
            <p className="font-secondary text-center text-sm sm:text-base py-0.5 text-gray-400">
              Vanilla panna cotta, maple sponge and chocolate sorbet
            </p>
            <p className="font-secondary text-center text-sm sm:text-base py-0.5 text-gray-400">
              Pear and almond tart, chocolate crumb, toffee sauce and clotted
              cream ice cream
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-8"></div>
    </div>
  );
};

export default Menu;

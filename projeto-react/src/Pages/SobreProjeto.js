import "./Styles/App.css";
import Main from "../Components/Main";
import Banner from "../Components/Banner";
import Content from "../Components/Content";

function SobreProjeto() {
  return (
    <div className="App items-top min-h-screen bg-amber-100 dark:bg-amber-700 sm:items-center sm:pt-0">
      <Main>
        <Banner />
        <Content
          id="sobre-o-projeto"
          title="Sobre o Projeto"
          text={<>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec tellus bibendum, malesuada tortor sit amet, auctor metus. Vivamus eget metus lacus. Cras posuere tellus sed consectetur molestie. Vestibulum nisl magna, volutpat quis mollis quis, pharetra eget erat. Maecenas aliquam viverra lectus, ac ullamcorper turpis tempus eget. Integer et tempor tellus. Nullam in imperdiet lacus, sed laoreet risus.

            Donec mi libero, bibendum at nisi non, tempus varius eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porttitor rhoncus imperdiet. Vivamus id risus in massa pellentesque convallis sit amet nec neque. Donec aliquam interdum lacinia. Proin tristique venenatis ipsum in iaculis. Donec at lorem eu tortor tempus ultrices. Donec fringilla imperdiet velit.

            Duis bibendum, dui nec pharetra tincidunt, sapien nibh volutpat risus, a finibus augue neque placerat turpis. Sed magna orci, tincidunt id leo in, vestibulum tempus tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus faucibus euismod sapien et gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas fermentum aliquam sapien at viverra. Praesent eget nibh pulvinar, consectetur velit vel, finibus ligula.

            Cras interdum, odio quis mattis porttitor, lacus lacus malesuada augue, vel ultricies dolor neque non quam. Nulla tristique nisl ut semper fringilla. Vivamus ultrices odio vitae tortor maximus laoreet. Morbi porta ex vitae libero blandit, quis hendrerit nulla dapibus. Fusce ut tristique odio, eu tempor justo. Maecenas justo orci, sodales eu nisl condimentum, sollicitudin iaculis augue. Donec ipsum sapien, venenatis id maximus non, eleifend id libero. Sed vitae euismod eros. Sed condimentum ex vitae accumsan finibus. Aliquam sit amet augue quis neque varius viverra id non est.

            Nulla suscipit, arcu eu hendrerit elementum, ex metus dapibus nibh, at hendrerit ex nisl id odio. Maecenas eu velit tortor. Mauris vulputate viverra velit in suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum efficitur diam id nibh molestie mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut ipsum venenatis, commodo tellus eget, placerat magna. Etiam quam ligula, vehicula vitae magna eget, aliquam aliquet massa.
          </>}
        />
      </Main>
    </div>
  );
}

export default SobreProjeto;

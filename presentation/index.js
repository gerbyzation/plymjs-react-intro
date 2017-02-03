// Import React
import React from "react";

import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
import Toggle from "../assets/toggle-react";
import Introduction from '../assets/react-name-func.js';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress='bar'>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              react.js
            </Heading>
            <Heading size={1} fit>
              another js framework..?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?" bgColor="tertiary">
            <Text textSize="3.5em" margin="20px 0 0" bold>👋</Text>
            <Markdown>
{`
  * Gerrit Neven
  * Digital Art & Technology @ Plymouth University
  * Fullstack Developer/Creative Coder
  * 🇳🇱🇳🇱🇳🇱 (don't like footbal though)
  * Do like climbing!
`}
            </Markdown>
          </Slide>
          <Slide>
            <Heading>What is React?</Heading>
          </Slide>

          <Slide bgColor="tertiary">
            <BlockQuote>
              <Quote textColor="primary">
                A JavaScript library for building user interfaces
              </Quote>
              <Cite textColor="primary">Facebook</Cite>
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading size={1}><S type='strikethrough'>MVC</S></Heading>
            <Text margin={50}>Also not (just) the "V"</Text>
          </Slide>

          <Slide>
            <Heading>React is:</Heading>
            <List>
              <ListItem>Learn once, write anywhere</ListItem>
              <ListItem>Declarative</ListItem>
              <ListItem>Component based</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading>Learn once, write anywhere</Heading>
            <List>
              <ListItem>React DOM</ListItem>
              <ListItem>React Native</ListItem>
            </List>
            <Text style={{textAlign: 'left'}}>Others:</Text>
            <List>
              <ListItem>gl-react</ListItem>
              <ListItem>React Canvas</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading>Declarative</Heading>
            <Text>
              Write <strong>what</strong> you want to happen,<br /> not <strong>how</strong> to make it happen
            </Text>
          </Slide>

          <Slide>
            <Heading style={{fontSize: '2em', marginBottom: '1em'}}>Unidirectional data flow</Heading>
            <Image
              src={require("../assets/data-flow-react.svg")}
            />
          </Slide>

          <Slide notes='Declare what we want to see given a certain state.'>
            <Heading>How do we tell it what we want?</Heading>
            <Heading margin={20}>JSX!</Heading>
          </Slide>

          <CodeSlide
            notes="Few gotcha's with JSX: classNames, JS expressions in brackets"
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/react-name.example')}
            ranges={[
              { loc: [0, 4] },
              { loc: [4, 19] },
              { loc: [20, 35] },
              { loc: [26, 34] , title: `🔥🔥 Markup in JavaScript!?! 🔥🔥`},
              { loc: [37, 41] }
            ]}
          />

          <Slide transition={'slide'}>
            <Introduction />
            <CodePane
              lang="html"
              source={`<div>
  <h1>Hi!</h1>
  <p>Hi! My name is Gerben, or Gerben, or Garreth, or Gerby, or Gerb, or G.</p>
</div>`}
            />
          </Slide>

          <Slide>
            <Heading>How do does it make the <em>'what'</em> happen?</Heading>
          </Slide>

          <Slide notes="<ul><li>DOM operations are expensive</li><li>lots of optimisation</li></ul>">
            <Heading>Virtual DOM</Heading>
            <Text>Taking care of the 'how'</Text>
            <List>
              <Appear><ListItem>Computes new DOM tree in JS</ListItem></Appear>
              <Appear><ListItem>Diffs with current tree</ListItem></Appear>
              <Appear><ListItem>Updates changed parts of tree in DOM</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary" notes="Performance by diffing + optimisation (DOM ops are expensive bit)">
            <Image
              src={require('../assets/vdom-diagram.svg')}
              width={1000}
            />
          </Slide>

          <Slide>
            <Heading>Components</Heading>
            <Text margin={50}>Reusable UI elements</Text>
            <Heading margin={0}><Code margin={0}>React.Component</Code></Heading>
          </Slide>

          <Slide transition="slide">
            <Heading>Component</Heading>
            <CodePane
              lang="jsx"
              source={require('raw!../assets/react-name.example')}
            />
          </Slide>

          <Slide transition="slide" notes="So testable!">
            <Heading>Functional Component</Heading>
            <CodePane
              lang="jsx"
              source={require('raw!../assets/react-name-func.example')}
            />
          </Slide>

          <Slide notes="setState is batched">
            <Markdown>{`
# State & Props

* State is located in a specific class-based component
* Updated with \`this.setState()\`
* Treat state as immutable
* Props are read-only
`}
            </Markdown>
          </Slide>

          <Slide>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/toggle-react.example")}
            />
          </Slide>

          <Slide>
            <Toggle />
          </Slide>

          <Slide>
            <Heading>Component Lifecycle</Heading>
            <Markdown>
            {`
* **\`constructor()\`**
* \`componentWillMount()\`
* **\`render()\`**
* \`componentDidMount()\`
* \`componentWillReceiveProps()\`
* **\`shouldComponentUpdate()\`**
* \`componentWillUpdate()\`
* \`componentDidUpdate()\`
* \`componentWillUnmount()\`
`}
            </Markdown>
          </Slide>

          <Slide>
            <Markdown>{`# <Demo>`}</Markdown>
          </Slide>

          <Slide>
            <Heading size={2}>So what do we use for data management?</Heading>
          </Slide>

          <Slide>
            <Heading>How do I get started?</Heading>
          </Slide>


{/*
          <Slide>
            <Heading>Component based</Heading>
          </Slide>

          <Slide>
            <Heading>Learn once, write anywhere</Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>*/}
        </Deck>
      </Spectacle>
    );
  }
}

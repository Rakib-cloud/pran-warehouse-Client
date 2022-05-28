import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container w-75 mx-auto">
      <h2 className='text-center text-decoration-underline fs-2 fw-bold mb-5' style={{color:'tomato'}}>Blogs</h2>
      <div>
        <div className="mb-5">
          <h3 style={{ color: "tomato" }}>
            What is the difference between Javascript and Node.js?
          </h3>
          <p>
            <span className="fw-bold">Answer: </span>The main difference of
            Javascript and Node.js is that, Javascript is a programming language
            and Node.js is a runtime environment for Javascript. Node.js helps
            Javascript to run outside of a browser. Javascript can be run on any
            browser if a browser has a proper engine, but to run Node.js we need
            a specific engine called "V8" of Google Chrome. Javascript is mainly
            used in client side mostly front-end but Node.js runs on server
            side. Javascript can play with HTML and DOM but Node.js can't do
            that. These are the basic differences between them.
          </p>
        </div>
        <div className="mb-5">
          <h3 style={{ color: "tomato" }}>When should you use Node.js and when should you use MongoDB?</h3>
          <p>
            <span className="fw-bold">Answer: </span> There are many reasons so that we can pick
            Node.js. Any apps that includes streaming
            service, social networking, instant messaging, node.js can be a
            great option to build them as node.js uses its event-driven feature
            and web-sockets to transmit live video, audio or text faster
            maintaining reliable data streaming. Node.js can handle intensive
            I/O activities so it really helps to build SPA's. Node.js can also
            maintain scalability so its good for apps with micro-services.
            <br />
            <br />
            We should use MongoDB as database when our data is more document
            oriented. If the data we have doesn't fit with the traditional
            relational database's schema, then we should pick noSQL databases
            like MongoDB. MongoDb is massively scalable and good for prototyping
            as well. If we're trying to build big data system with unstructured
            data then mongoDB will be a good choice.
          </p>
        </div>
        <div className="mb-5">
          <h3 style={{ color: "tomato" }}>What are the differences between SQL and noSL databases?</h3>
          <p>
            <span className="fw-bold">Answer: </span> In SQL and noSQL databases, the main difference is that SQL databases are relational databases and NoSQL databases non-relational databases, meaning that in NoSQL data points are not connected to each other. SQL databases have rigid schemas and NoSQL databases has flexible Data Models. They doesn't need fix tables with fixed rows and columns which SQL databases do. NoSQL databases maintains documents, key-value pairs, graphs instead of tables. SQL databases are good for using in multi-row operations whereas NoAQL databases are better for unstructured data like JSON. NoSQL databases are good when we need to run simple lookup queries on large amount of data, analyzing relationship between connected data, but SQL databases are good for general purposes.  
          </p>
        </div>
        <div className="mb-5">
          <h3 style={{ color: "tomato" }}>What is the purpose of JWT and how does it work?</h3>
          <p>
            <span className="fw-bold">Answer: </span> The purpose of JWT is to share/exchange information between two parties (i.e.client and server) securely. It can also be used for authorization. 
            <br />
            <br />
            JWT's contain claims such as: who issued token, validity of the token and what permission has been given to client. JWT has three parts like part1.part2.part3. Each parts are separated by dots and serialized using base64 algorithm. After decoding a token one will get two strings named header-payload and the signature. The payload contains the claims and the signature assures the information hasn't altered. The sender issues a secret along with header and payload. While using it on receiver's side verifies the header and payload using the secret and signature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

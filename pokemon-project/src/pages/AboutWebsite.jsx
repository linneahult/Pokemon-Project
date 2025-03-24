import "../styles/AboutWebsite.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutWebsite = () => {
  return (
    <div className="about-container text-center py-5">
      <div className="row align-items-center">
        <div className="col-md-8 offset-md-2">
          <div className="page-title">
            <motion.h1
              className="display-4 fw-bold custom-text-color"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Pokémon Finder
            </motion.h1>
          </div>

          <motion.p
            className="lead custom-text-color"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Welcome to Pokémon Finder - the place where you can discover the
            world of Pokémon!
          </motion.p>

          <motion.p
            className="custom-text-color"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            On this website, you can quickly and easily search for any Pokémon
            and get detailed information about its characteristics, statistics,
            and evolution. Our site retrieves real-time data from an official
            Pokémon API, ensuring that you always have access to the latest
            information.
          </motion.p>

          <motion.h3
            className="fw-bold custom-text-color"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
          >
            In addition to this, you can also:
          </motion.h3>

          <motion.ul
            className="about-list"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            viewport={{ once: true }}
          >
            <li>
              • Participate in discussions with other Pokémon enthusiasts.
            </li>
            <li>• Browse through an extensive Pokédex.</li>
            <li>• Read about teams and their characters.</li>
          </motion.ul>

          <motion.h2
            className="fw-bold custom-text-color"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            Pokémon History
          </motion.h2>

          <motion.p
            className="custom-text-color"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            Pokémon, short for "Pocket Monsters," was originally created by
            Satoshi Tajiri. The Pokémon franchise started as a game in Japan in
            1996 and has since developed into a global phenomenon with games,
            animated series, movies, and a physical card game. The core of the
            Pokémon world revolves around trainers capturing and battling
            Pokémon to become champions.
          </motion.p>

          <motion.h3
            className="fw-bold custom-text-color"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2 }}
            viewport={{ once: true }}
          >
            A Little Fun Fact
          </motion.h3>
          <motion.p
            className="custom-text-color"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.4 }}
            viewport={{ once: true }}
          >
            Did you know that Pikachu was not originally intended to be the
            mascot of Pokémon? Clefairy was first considered, but Pikachu's
            popularity in the anime made it the official face of the franchise!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutWebsite;

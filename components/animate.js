import { motion } from "framer-motion";

const Animate = ({ children, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
    >
        {children}
    </motion.div>
);

export default Animate;

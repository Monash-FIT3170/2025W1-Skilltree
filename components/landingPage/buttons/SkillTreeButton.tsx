const SkillTreeButton = () => {
    return(
        <a href='#home'>
        <section className="inline-flex items-center px-4 py-2 bg-gray-300 rounded-full">
            <img
                src="/images/skilltree-logo.jpg"
                alt="SkillTree Logo"
                className="w-8 h-8 mr-3 rounded-full"
            />
            <span className="font-bold">SkillTree</span>
        </section>
        </a>
    );
}

export default SkillTreeButton;
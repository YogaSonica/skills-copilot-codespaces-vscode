function skillsMember(name, skill) {
    if (!name || !skill) {
        return "Name and skill are required.";
    }

    return `${name} has the skill: ${skill}`;
}

// Example usage
console.log(skillsMember("Alice", "JavaScript")); // Output: Alice has the skill: JavaScript
console.log(skillsMember("Bob", "")); // Output: Name and skill are required.

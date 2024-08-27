import Text "mo:base/Text";

actor {
  public query func getWelcomeMessage() : async Text {
    return "Welcome to IC Video!";
  };
}
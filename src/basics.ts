export class Basics {
    main(): void{
        const message: string = "My Lord!";
        // without function
        console.log(message);
        // with function
        console.log(this.getMessage());
    }
    getMessage() : string {
        const message: string = "My Lord!";
        
        return message.toLowerCase();
    }
}
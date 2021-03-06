class houseBlueprint
{
    constructor(address, description, owner, size)
    {
        this.address = address;
        this.description = description;
        this.owner = owner;
        this.size = size;
        this.date = new Date();
        this._averageBuildSpeed = 0.5;
        
    }
    getDaysToBuild() 
    {
        return this.size / this._averageBuildSpeed;
    }

    
}
class HouseBuilder extends houseBlueprint
{
    constructor(address, description, owner, size, roomCount)
    {
        super(address, description, owner, size);
        this.roomCount = roomCount;
    }
}


const mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO: check if they are logged in.
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args                
            }
        }, info);

        console.log(item);

        return item;
    },
    updateItem(parent, args, ctx, info) {
        // First take a copy of the updates.
        const updates = { ...args };
        // Remove the ID from the updates.
        delete updates.id;
        // Run he update method.
        return ctx.db.mutation.updateItem(
            {
                data: updates,
                where: {
                    id: args.id
                }
            }, 
            info
        );
    }
};

module.exports = mutations;

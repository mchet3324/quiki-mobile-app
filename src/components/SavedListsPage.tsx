import { List, Plus, Trash2, Calendar, ShoppingCart } from 'lucide-react';
import { ShoppingList } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import { useState } from 'react';

interface SavedListsPageProps {
  lists: ShoppingList[];
  onCreateList: (name: string) => void;
  onDeleteList: (id: string) => void;
  onLoadList: (id: string) => void;
}

export function SavedListsPage({ lists, onCreateList, onDeleteList, onLoadList }: SavedListsPageProps) {
  const [newListName, setNewListName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreate = () => {
    if (newListName.trim()) {
      onCreateList(newListName);
      setNewListName('');
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-card border-b border-border z-10">
        <div className="flex items-center justify-between p-4">
          <div>
            <h1>Saved Lists</h1>
            <p className="text-sm text-muted-foreground">{lists.length} lists</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New List
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New List</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <Input
                  placeholder="List name (e.g., Weekly Groceries)"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleCreate()}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreate}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="p-4">
        {lists.length === 0 ? (
          <div className="text-center py-12">
            <List className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="mb-2">No saved lists</h2>
            <p className="text-muted-foreground mb-6 px-8">
              Create lists to save your favorite products and reuse them later
            </p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Your First List
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {lists.map((list) => (
              <div key={list.id} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="mb-1">{list.name}</h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <ShoppingCart className="w-3 h-3" />
                        <span>{list.items.length} items</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(list.updatedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onDeleteList(list.id)}
                    className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                </div>

                {list.items.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {list.items.slice(0, 3).map(item => item.product.name).join(', ')}
                      {list.items.length > 3 && '...'}
                    </p>
                  </div>
                )}

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onLoadList(list.id)}
                >
                  Load List to Cart
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

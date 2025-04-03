import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

interface ToolbarProps {
    onRefresh: () => void; // Callback to trigger refresh
    onRemove: () => void; // Callback to notify parent of removal
    onAdd: () => void; // Callback to notify parent of add action
}

const Toolbar: React.FC<ToolbarProps> = ({ onRefresh, onRemove, onAdd }) => {
    return (
        <>
            <div className="px-3 pb-3 border-bottom">
                <ButtonGroup aria-label="ToDo item actions">
                    <Button variant="outline-secondary" id="btn-add" onClick={onAdd}>
                        <i className="bi bi-plus-circle"></i>
                    </Button>
                    <Button variant="outline-secondary" id="btn-remove" onClick={onRemove}>
                        <i className="bi bi-trash"></i>
                    </Button>
                    <Button variant="outline-secondary" id="btn-refresh" onClick={onRefresh}>
                        <i className="bi bi-arrow-clockwise"></i>
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default Toolbar;

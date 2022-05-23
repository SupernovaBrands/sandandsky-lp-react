import React from 'react';
import PropTypes from 'prop-types';

export default class QuantityBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: `${props.quantity}`
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			lastStock: false,
		};
	}

	onAddQuantity = (e) => {
		e.preventDefault();
		const qty = parseInt(this.state.quantity, 10);
		if (qty < 99) {
			this.setState({ quantity: qty + 1 }, () => {
				this.props.onChangeQuantity(this.state.quantity);
			});
		}
	}

	onSubtractQuantity = (e) => {
		e.preventDefault();
		const qty = parseInt(this.state.quantity, 10);
		const min = 1;
		if (this.state.quantity > min) {
			this.setState({ quantity: qty - 1 }, () => {
				this.props.onChangeQuantity(this.state.quantity);
			});
			
		}
	}

	onFocus = (e) => {
	}

	onChangeQuantity = (e) => {
		const { target: { value }, nativeEvent } = e;
		const qty = parseInt(value, 10);
		if (nativeEvent.data === 'e') return;
		const min = 1;
		if (value === '' || qty < min) {
			this.setState(
				{ quantity: `${min}` },
			);
		}
	}

	render() {
		return (
			<div className="quantity-box d-flex" data-inventory={this.props.productStock} data-id={this.props.productId}>
				<button
					className="input-group-text bg-transparent border-end-0 rounded-lg rounded-right-0 border-dark flex-grow-0"
					type="button"
					aria-label="Add Subtract"
					disabled={this.state.prevQuantity === 1}
					onClick={this.onSubtractQuantity}
					data-cy="cart-subtract-quantity-icon"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg"><path d="M17.543 11.029H2.1A1.032 1.032 0 011.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"></path></svg>
				</button>
				<input
					type="number"
					name={this.props.name}
					className="form-control border-start-0 border-end-0 rounded-0 p-0 text-center flex-grow-0 bg-transparent text-body border-dark font-size-dt-lg"
					value={this.state.quantity}
					onChange={this.onChangeQuantity}
					onFocus={this.onFocus}
					readOnly={!this.props.editable}
				/>
				<button
					className="input-group-text bg-transparent border-start-0 rounded-lg rounded-left-0 border-dark flex-grow-0"
					type="button"
					aria-label="Add Quantity"
					disabled={false}
					onClick={this.onAddQuantity}
					data-cy="cart-add-quantity-icon"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg"><path d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"></path></svg>
				</button>
			</div>
		);
	}
}

QuantityBox.propTypes = {
	onChangeQuantity: PropTypes.func,
	productId: PropTypes.number,
};
